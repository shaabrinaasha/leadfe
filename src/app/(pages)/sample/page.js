import React from "react";
import Section from "@/app/components/global/section";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import Textfield from "@/app/components/global/textfield";
import Selectfield from "@/app/components/global/selectfield";
import Datepicker from "@/app/components/global/datepicker";
import Searchfield from "@/app/components/global/searchfield";
import SubmitButton from "@/app/components/global/blue-button"

const selectSample = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Option 5" },
];

export default function sample() {
  return (
    <PageLayout title={"Sample"}>
      <div className="">
        <div className="bg-white drop-shadow-lg rounded-lg mb-5">
          <div className="p-5">
            <h1 className="text-[18px] text-sky-950 font-bold">H1 Example</h1>
            <h2 className="text-[15px]  font-semibold">H2 Example</h2>
            <p className="text-[12px]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tristique eros ac lorem auctor sodales. Sed volutpat bibendum
              augue sit amet vehicula. Vivamus congue, arcu nec blandit euismod,
              ante nisi tincidunt turpis, ut malesuada orci elit eu velit. Sed
              sit amet leo nec augue aliquam eleifend. Nulla imperdiet purus
              ullamcorper faucibus rutrum. Sed eget vehicula ante. Morbi rhoncus
              ipsum lacus, ut condimentum ligula volutpat rutrum. Integer porta
              nec est quis varius. Mauris tempor vel justo at scelerisque. Sed
              luctus commodo elit. Suspendisse commodo leo tristique, tempus
              risus id, lacinia dui. Ut eu metus risus.
            </p>
          </div>
        </div>
        <div className="bg-white drop-shadow-lg rounded-lg mb-5 ">
          <div className="p-5">
            <h1 className="text-[18px] text-sky-950 font-bold">Form Example</h1>
            <h2 className="text-[15px]  font-semibold">Sub-Content</h2>
            <Section height={"h-full"} width={"w-full"}>
              <div className="grid grid-cols-3 gap-5">
                <Textfield
                  id="sample-text"
                  label={"Textfield"}
                  placeholder={"input your text here..."}
                  onChange={""}
                  mandatory={true}
                />

                <Selectfield
                  id="sample-select"
                  label={"Select an Option"}
                  name={"Selectfield"}
                  placeholder={"Select"}
                  defaultValue={"header"}
                  onChange={""}
                  selectData={selectSample}
                  mandatory={true}
                />

                <Datepicker bigLabel={"Date"} label={"Small Label"} onChange={''} mandatory={true}/>
              </div>
              <div className="grid grid-cols-3 items-center justify-center">
                <Searchfield
                  id="sample-search"
                  label={"Search"}
                  placeholder={"search text here..."}
                  onChange={""}
                />
                
              </div>
              <SubmitButton width={"w-20"} >Submit</SubmitButton>
            </Section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
