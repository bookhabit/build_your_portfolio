export default function ImageUI({src,...rest}:{src:string,className?:string}) {
    src = 'http://localhost:4000/uploads/'+src;
    return (
      <img {...rest} src={src} alt={'이미지'} />
    );
  }
  