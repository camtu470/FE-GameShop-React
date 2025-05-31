import Footer from "@/components/home1/footer";
import NameArea from "@/components/layout/name";
import { TiArrowMinimiseOutline } from "react-icons/ti";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <NameArea title="CONTACT" />

      <div className="flex gap-10 px-10">
        <div className="w-1/2 flex flex-col gap-4">
          <p className="font-extrabold font-sans text-5xl uppercase">
            CONTACT US AND FIND YOUR mykd
          </p>
          <p>
            Axcepteur sint occaecat atat non proident, sunt culpa officia
            deserunt mollit anim id est labor umLor emdolor
          </p>
          <div className="flex gap-2 items-center">
            <TiArrowMinimiseOutline />
            <p>INFORMATION</p>
          </div>
          <ul>
            <li>+971 333 222 557</li>
            <li>info@exemple.com</li>
            <li>New Central Park W7 Street, New York</li>
          </ul>
        </div>
        <div className="w-1/2">
          <form action="" className="p-2 flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-1/2 rounded p-2"
              />
              <input
                type="text"
                placeholder="Email*"
                className="w-1/2 p-2 rounded"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Enter your message.."
              className="w-full"
            ></textarea>
            <button className="border p-4 rounded">Submit now</button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-bold text-center bg-orange-300 p-8">
          Maps
        </h2>
      </div>
      <Footer />
    </div>
  );
}
