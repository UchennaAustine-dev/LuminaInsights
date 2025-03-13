"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";
// endOfMonth,
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

type CalendarProps = {
  mode?: "single" | "range" | "multiple";
  selected?: Date | Date[] | { from: Date; to?: Date };
  onSelect?: (date: Date | undefined) => void;
  month?: Date;
  onMonthChange?: (date: Date) => void;
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
  disabled?: Date | ((date: Date) => boolean);
  fromDate?: Date;
  toDate?: Date;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

function Calendar({
  mode = "single",
  selected,
  onSelect,
  month: monthProp,
  onMonthChange,
  className,
  classNames = {},
  showOutsideDays = true,
  disabled,
  fromDate,
  toDate,
  weekStartsOn = 0,
  ...props
}: CalendarProps) {
  const [month, setMonth] = React.useState(
    () => monthProp || (selected instanceof Date ? selected : new Date())
  );

  React.useEffect(() => {
    if (monthProp) {
      setMonth(monthProp);
    }
  }, [monthProp]);

  // Handle month navigation
  const handlePreviousMonth = () => {
    const previousMonth = new Date(month);
    previousMonth.setMonth(previousMonth.getMonth() - 1);

    if (fromDate && previousMonth < fromDate) return;

    setMonth(previousMonth);
    onMonthChange?.(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(month);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    if (toDate && nextMonth > toDate) return;

    setMonth(nextMonth);
    onMonthChange?.(nextMonth);
  };

  // Check if a date is selected
  const isDateSelected = (date: Date) => {
    if (!selected) return false;

    if (selected instanceof Date) {
      return isSameDay(date, selected);
    }

    if (Array.isArray(selected)) {
      return selected.some((selectedDate) => isSameDay(date, selectedDate));
    }

    if ("from" in selected) {
      if (isSameDay(date, selected.from)) return true;
      if (selected.to && date >= selected.from && date <= selected.to)
        return true;
    }

    return false;
  };

  // Check if a date is the start of a range
  const isRangeStart = (date: Date) => {
    if (!selected || !("from" in selected)) return false;
    return isSameDay(date, selected.from);
  };

  // Check if a date is the end of a range
  const isRangeEnd = (date: Date) => {
    if (!selected || !("from" in selected) || !selected.to) return false;
    return isSameDay(date, selected.to);
  };

  // Check if a date is in the middle of a range
  const isRangeMiddle = (date: Date) => {
    if (!selected || !("from" in selected) || !selected.to) return false;
    return date > selected.from && date < selected.to;
  };

  // Check if a date is disabled
  const isDateDisabled = (date: Date) => {
    if (disabled === undefined) return false;

    if (disabled instanceof Date) {
      return isSameDay(date, disabled);
    }

    if (typeof disabled === "function") {
      return disabled(date);
    }

    return false;
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    if (isDateDisabled(date)) return;

    if (onSelect) {
      onSelect(date);
    }
  };

  // Generate calendar days
  const renderCalendarDays = () => {
    // const daysInMonth = endOfMonth(month).getDate()
    // const firstDayOfMonth = startOfMonth(month).getDay()
    const days = [];

    // Get the start of the week for the first day of the month
    const start = startOfWeek(startOfMonth(month), { weekStartsOn });

    // Calculate how many weeks to display
    const weeksToDisplay = 6;

    // Generate days for each week
    for (let week = 0; week < weeksToDisplay; week++) {
      const weekDays = [];

      for (let day = 0; day < 7; day++) {
        const date = addDays(start, week * 7 + day);
        const isOutsideMonth = !isSameMonth(date, month);

        if (isOutsideMonth && !showOutsideDays) {
          weekDays.push(
            <div
              key={`empty-${week}-${day}`}
              className={cn("w-8 h-8", classNames.day_hidden)}
            >
              <span></span>
            </div>
          );
          continue;
        }

        const isSelected = isDateSelected(date);
        const isDisabled = isDateDisabled(date);
        const isToday_ = isToday(date);
        const isRangeStart_ = isRangeStart(date);
        const isRangeEnd_ = isRangeEnd(date);
        const isRangeMiddle_ = isRangeMiddle(date);

        weekDays.push(
          <div
            key={`day-${week}-${day}`}
            className={cn(
              "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
              isSelected && "[&:has([aria-selected])]:bg-accent",
              isRangeEnd_ &&
                "[&:has([aria-selected].day-range-end)]:rounded-r-md",
              mode === "range"
                ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                : "[&:has([aria-selected])]:rounded-md",
              classNames.cell
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              disabled={isDisabled}
              onClick={() => handleDateSelect(date)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "size-8 p-0 font-normal aria-selected:opacity-100",
                isSelected &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                isToday_ && !isSelected && "bg-accent text-accent-foreground",
                isOutsideMonth &&
                  "text-muted-foreground aria-selected:text-muted-foreground",
                isDisabled && "text-muted-foreground opacity-50",
                isRangeMiddle_ &&
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                isRangeStart_ &&
                  "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
                isRangeEnd_ &&
                  "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
                classNames.day
              )}
              aria-selected={isSelected}
            >
              {date.getDate()}
            </Button>
          </div>
        );
      }

      days.push(
        <div
          key={`week-${week}`}
          className={cn("flex w-full mt-2", classNames.row)}
        >
          {weekDays}
        </div>
      );
    }

    return days;
  };

  // Get day names
  const dayNames = React.useMemo(() => {
    const weekStart = weekStartsOn || 0;
    return Array.from({ length: 7 }, (_, i) => {
      const day = (i + weekStart) % 7;
      return format(new Date(2021, 0, day + 3), "EEE").substring(0, 1);
    });
  }, [weekStartsOn]);

  return (
    <div className={cn("p-3", className)} {...props}>
      <div
        className={cn(
          "flex justify-center pt-1 relative items-center w-full",
          classNames.caption
        )}
      >
        <Button
          variant="outline"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1",
            classNames.nav_button,
            classNames.nav_button_previous
          )}
          onClick={handlePreviousMonth}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className={cn("text-sm font-medium", classNames.caption_label)}>
          {format(month, "MMMM yyyy")}
        </div>
        <Button
          variant="outline"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1",
            classNames.nav_button,
            classNames.nav_button_next
          )}
          onClick={handleNextMonth}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
      <div className={cn("flex flex-col gap-4", classNames.month)}>
        <div
          className={cn("w-full border-collapse space-x-1", classNames.table)}
        >
          <div className={cn("flex", classNames.head_row)}>
            {dayNames.map((day, i) => (
              <div
                key={`day-name-${i}`}
                className={cn(
                  "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                  classNames.head_cell
                )}
              >
                {day}
              </div>
            ))}
          </div>
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
}

export { Calendar };
