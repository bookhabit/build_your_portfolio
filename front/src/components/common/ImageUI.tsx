export default function ImageUI({src,alt,...rest}:{src:string,alt:string,className?:string}) {
  const LOCAL_BACKEND="http://localhost:4000/uploads/"
  const DEPLOY_BACKEND="http://54.180.155.198:4000//uploads/"
    src = DEPLOY_BACKEND+src;
    return (
      <img {...rest} src={src} alt={alt} />
    );
  }
  