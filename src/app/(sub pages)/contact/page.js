import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
        <Image 
          src={bg} 
          alt = "background-image" 
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>
        <article className="relative w-full flex flex-col items-center justify-center space-y-8"> 
          <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">
              Summon the wizard
            </h1>
            <p className="text-center font-light">
            Welcome to my realm of digital enchantments! If you are looking to collaborate, explore tech mysteries, or share your ideas, you’re in the right place. Use the form below to send your message through the ethereal network. I will respond with the creativity and expertise that defines my craft. Let’s create something extraordinary together!
            </p>
          </div>
          <Form/>
        </article>

    </>
  );
}
