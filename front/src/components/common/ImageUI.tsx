export default function ImageUI({src,alt,...rest}:{src:string,alt:string,className?:string}) {
  const LOCAL_BACKEND="http://localhost:4000/uploads/"
  const DEPLOY_BACKEND="https://my-portfolio-server.com/uploads/"
    src = LOCAL_BACKEND+src;
    return (
      <img {...rest} src={src} alt={alt} />
    );
  }
  