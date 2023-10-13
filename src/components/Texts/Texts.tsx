type HomeTemplateProps = {
    styledTitle: string;
    headerText: string;
    peragraphText: string;
  };
const Texts = ({
    styledTitle,
    headerText,
    peragraphText,
  }: HomeTemplateProps) => {
  return (
    <div>
       <div className="basis-1/2">
          <div className="px-8 space-y-8">
            <h1 className="text-5xl font-bold leading-[1.2]">
              {headerText}
              <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#fcff2f] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#f9ff40] mx-3">
                {styledTitle}
              </span>
              {headerText}
            </h1>
            <p className="text-sm text-justify">{peragraphText}</p>
          </div>
        </div>
    </div>
  )
}

export default Texts
