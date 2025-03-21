interface IProps {
  src: string;
  className?: string;
}

const IconImg = ({ src, className = "w-8 h-8" }: IProps) => {
  return <img src={src} className={className} />;
};

export default IconImg;
