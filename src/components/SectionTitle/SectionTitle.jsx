const SectionTitle = ({title, subtitle}) => {
    return (
        <div>
            <div className=" py-10 text-center max-w-[680px] mx-auto">
      {/* Title with pink borders */}
      <div className="flex items-center justify-center gap-4">
        <span className="h-0.5 w-12 bg-primary rounded"></span>
        <h2 className={`text-3xl font-bold text-gray-900}`}>{title}</h2>
        <span className="h-0.5 w-12 bg-primary rounded"></span>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-2 text-gray-600 max-w-xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
        </div>
    );
};

export default SectionTitle;