import Image from "next/image";

interface MessagesProps {
  message: string;
  info?: boolean;
}

const Message = ({ message, info }: MessagesProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        src="/iconChuck.png"
        alt="Message"
        height={60}
        width={60}
        className="object-scale-down"
      />
      <span className="text-[15px] font-medium">
        {info ? message : `“${message}”`}
      </span>
    </div>
  );
};

export default Message;
