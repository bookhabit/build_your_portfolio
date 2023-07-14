export default function ImageUI({src,alt,...rest}:{src:string,alt:string,className?:string}) {
    src = 'http://localhost:4000/uploads/'+src;
    return (
      <img {...rest} src={src} alt={alt} />
    );
  }
  