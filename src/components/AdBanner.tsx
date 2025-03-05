interface AdBannerProps {
  width: string;
  height: string;
}

const AdBanner = ({ width, height }: AdBannerProps) => {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center`}
      style={{ width, height }}
    >
      <p className="text-gray-500 text-sm">Advertisement</p>
    </div>
  );
};

export default AdBanner;
