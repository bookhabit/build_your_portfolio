import tw from "tailwind-styled-components";

interface FormContainerProps{
  width:string;
  height?:string;
}

const FormContainerStyle = tw.form<FormContainerProps>`
  ${(props)=>props.width}
  ${(props)=>props.height}
`;

export default function FormContainer({width,height,children}:{width:string,height:string,children: React.ReactNode}) {
    return (
      <FormContainerStyle width={width} height={height}>
        {children}
      </FormContainerStyle>
    );
  }
  