import Image from "next/image";

interface StripProps {
  id: number;
  url: string;
  bgcolour: string;
}

function TheStrip(props: StripProps) {
  return (

    <div className="relative overflow-hidden bg-no-repeat bg-cover w-full">
      <Image
        src={props.url}
        width={300}
        height={300}
        alt=""
        className=""
        priority
      />
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-50"
        style={{
          backgroundColor: props.bgcolour,
        }}
      >
      </div>
    </div>
  );
}

export default TheStrip;
