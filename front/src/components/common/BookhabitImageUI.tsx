export default function BookhabitImageUI({src,alt,...rest}:{src:string,alt:string,className?:string}) {
    const Front_Public="/bookhabit/"
      src = Front_Public+src;
      return (
        <img {...rest} src={src} alt={alt} />
      );
    }
    