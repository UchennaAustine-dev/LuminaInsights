"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/date-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface DateRange {
  from: Date;
  to?: Date;
}

export function DatePickerWithRange({
  date,
  setDate,
  className,
}: {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  className?: string;
}) {
  const [isSelecting, setIsSelecting] = React.useState(false);

  const handleSelect = (selectedDate: Date) => {
    if (!isSelecting) {
      // First selection - set the "from" date
      setDate({ from: selectedDate });
      setIsSelecting(true);
    } else {
      // Second selection - set the "to" date and complete the range
      const currentDate = date?.from || new Date();

      if (selectedDate < currentDate) {
        // If the second date is before the first, swap them
        setDate({ from: selectedDate, to: currentDate });
      } else {
        setDate({ from: currentDate, to: selectedDate });
      }

      setIsSelecting(false);
    }
  };

  // Predefined ranges
  const handlePredefinedRange = (days: number) => {
    const today = new Date();
    setDate({
      from: today,
      to: addDays(today, days),
    });
    setIsSelecting(false);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 border-b">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Select range</h4>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePredefinedRange(7)}
                >
                  7 days
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePredefinedRange(30)}
                >
                  30 days
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePredefinedRange(90)}
                >
                  90 days
                </Button>
              </div>
            </div>
          </div>
          <div className="flex">
            <Calendar selected={date?.from} onSelect={handleSelect} />
            <div className="border-l" />
            <Calendar selected={date?.to} onSelect={handleSelect} />
          </div>
          <div className="p-3 border-t">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {isSelecting ? "Now select end date" : "Select start date"}
              </p>
              {date?.from && date?.to && (
                <p className="text-sm font-medium">
                  {Math.round(
                    (date.to.getTime() - date.from.getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days
                </p>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
