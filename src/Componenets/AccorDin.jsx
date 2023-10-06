import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
export default function AccorDin(props) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className={`${props.bgcolour} h-screen m-0 p-8`}>
      <div className="container m-auto">  
      {<Accordion open={open === 1} className={`${props.accBgColor} mb-2 rounded-lg border border-blue-gray-100 px-4`}>
        <AccordionHeader onClick={() => handleOpen(1)} className={` border-b-0 transition-colors ${open === 1 ? "text-blue-300 hover:!text-blue-700" : "" }`}
        >
          Do you have any plans for the future?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-black">
        The examiner will ask this question to understand the candidate’s ambitions and where they see themselves in the near future. The candidate should talk about their short-term and long-term aspirations and why those goals are important to them.
        </AccordionBody>
      </Accordion>
       }


      <Accordion open={open === 2} className={`${props.accBgColor} mb-2 rounded-lg border border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What do you like doing in your free time?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-black">
        This question gives the examiners insight into what activities the candidate enjoys and what kind of person they are. Candidates should talk about their favourite leisure activities, such as sports, reading, or music.
        </AccordionBody>
      </Accordion>
      
      
      <Accordion open={open === 3} className={`${props.accBgColor} mb-2 rounded-lg border border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Do you have any hobbies?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-black">
        The examiner will ask this question to get an idea of different aspects of the candidate’s life, such as their interests and activities outside of work or studies. So, the candidate should be prepared to talk about one or two of their favorite hobbies and why they enjoy them.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} className={`${props.accBgColor} mb-2 rounded-lg border border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What did you study at school?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-black">
        This question can help the examiner know if the candidate has any knowledge of specific subjects or topics that may come up in the test. The candidate should be prepared to provide details about which subjects they studied and for how long.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 5} className={`${props.accBgColor} mb-2 rounded-lg border border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What do you do?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-black">
        This question allows the examiners to get an idea of what kind of person the candidate is and what they do in their everyday life. If asked, candidates should be ready to explain a bit more about their job or studies.
        </AccordionBody>
      </Accordion>
    </div>
  </div>
  );
}
