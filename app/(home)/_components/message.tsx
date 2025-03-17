import Image from "next/image";

interface MessagesProps {
  message: string;
  info?: boolean;
  searchParams?: string;
}

const Message = ({ message, info, searchParams }: MessagesProps) => {
  const renderMessage = (): string => {
    // Caso seja 'info' retorna a mensagem sem aspas
    if (info) {
      return message;
    } else {
      // Caso seja busca com parametros destaca as palavras usadas para busca no resultado
      if (searchParams) {
        const searchParamsArray: string[] = searchParams.split(" ");
        let newMessage = message;
        searchParamsArray.forEach((word) => {
          newMessage = newMessage.replace(
            word,
            `<span class="text-primary">${word}</span>`,
          );
        });
        return newMessage;
      } else {
        // Retorna a mensagem em forma de citação com aspas
        return `“${message}”`;
      }
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        src="/iconChuck.png"
        alt="Message"
        height={60}
        width={60}
        className="object-scale-down"
      />
      <span
        className="text-[15px] font-medium"
        dangerouslySetInnerHTML={{ __html: renderMessage() }}
      />
    </div>
  );
};

export default Message;
