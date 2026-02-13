import React, { useState } from 'react';
import { motion } from 'framer-motion';

const img = "http://localhost:3845/assets/f125759324c7b9a00f812570b70b92d011eca006.png";
const img1 = "http://localhost:3845/assets/57ef483eed4734bb46c06d1c7fdcd832d4e37031.png";
const img2 = "http://localhost:3845/assets/2aa85576142f1428e87e85df4bd79a82c8226590.png";
const imgFrame1984081208 = "http://localhost:3845/assets/49c80d0924d58196d8805f639e40812aacb4326a.svg";
const imgFrame1984081209 = "http://localhost:3845/assets/64b9468ecbb7dd348fbba31bc8dbbf1dca097f3c.svg";
const imgFrame1984081210 = "http://localhost:3845/assets/d4def8cb46073067f787540a378d5e1b804b943f.svg";
const img3 = "http://localhost:3845/assets/41f700310343178d4fecf15880b92978acaabfa2.svg";
const img4 = "http://localhost:3845/assets/6b61edb878122bd69996f1d0f6e310582edab445.svg";
const imgGroup = "http://localhost:3845/assets/365860bc1d541eabbb9d6a451b732357e5537900.svg";
const imgGroup1 = "http://localhost:3845/assets/f6e6de29c76e270e8fcec160620d53059d3ce113.svg";
const imgEmoji = "http://localhost:3845/assets/feb4aa7d03ed46a1103d9b4cff211e2b54009c3e.svg";
const imgGroup2 = "http://localhost:3845/assets/c44cc8faa861c7a02dc6bec6666bed4d913def2f.svg";

function DottedPattern() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[8px] relative size-full" data-name="dotted-pattern" data-node-id="2023:4119">
      <div className="h-3 relative shrink-0 w-[136px]" data-node-id="2023:4102">
        <img alt="" className="block max-w-none size-full" src={imgFrame1984081208} />
      </div>
      <div className="h-3 relative shrink-0 w-[136px]" data-node-id="2023:4103">
        <img alt="" className="block max-w-none size-full" src={imgFrame1984081209} />
      </div>
      <div className="h-3 relative shrink-0 w-[136px]" data-node-id="2023:4104">
        <img alt="" className="block max-w-none size-full" src={imgFrame1984081210} />
      </div>
      <div className="h-3 relative shrink-0 w-[136px]" data-node-id="2023:4105">
        <img alt="" className="block max-w-none size-full" src={imgFrame1984081209} />
      </div>
      <div className="h-3 relative shrink-0 w-[136px]" data-node-id="2023:4111">
        <img alt="" className="block max-w-none size-full" src={imgFrame1984081210} />
      </div>
    </div>
  );
}

function FeaturesTabsWithSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["AI-Powered Search", "Market Analysis", "Property Comparison", "Investment Insights", "Real time data"];

  return (
    <div className="content-stretch flex flex-col gap-7 items-center justify-start relative size-full" data-name="Property 1=Default" data-node-id="2187:63135">
      <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="features-titles" data-node-id="2187:63097">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`box-border content-stretch flex gap-2.5 h-12 items-center justify-center p-[10px] relative rounded-[24px] shrink-0 cursor-pointer`}
            data-name="Features-Tag"
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: activeTab === index ? '#1e4685' : 'white',
              color: activeTab === index ? 'white' : '#424242',
            }}
          >
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]" />
            <div className="font-sans font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">{tab}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-[780px] relative rounded-[16px] shrink-0 w-[808px]" data-name="Features-Slider-TryThat" data-node-id="2187:63108">
        <motion.div
          className="absolute bg-[57.23%_53.02%] bg-no-repeat bg-size-[123.75%_120.45%] h-[370px] left-[19px] rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] top-[150px] w-[451px]"
          data-name="better4 1"
          id="node-I2187_63108-2056_4679"
          style={{ backgroundImage: `url('${img}')` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bg-neutral-100 box-border content-stretch flex gap-2.5 h-[51px] items-center justify-start left-[-15px] px-4 py-3 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] top-[101px] w-[451px]"
          data-name="Response"
          id="node-I2187_63108-2056_4678"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-sans font-medium leading-[0] not-italic relative shrink-0 text-[#616161] text-[16px] text-nowrap" id="node-I2187_63108-2056_4678-2028_4267">
            <p className="leading-[normal] whitespace-pre">Here is your list of top 5 commercial properties in Pune</p>
          </div>
        </motion.div>
        <motion.div
          className="absolute bg-[#4a7bc8] box-border content-stretch flex gap-4 h-[58px] items-center justify-start left-[17px] pl-2 pr-6 py-4 rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[19px] w-[420px]"
          data-name="Chat-input-bubble"
          id="node-I2187_63108-2168_4523"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative shrink-0 size-9" id="node-I2187_63108-2168_4523-2168_4512">
            <img alt="" className="block max-w-none size-full" height="36" src={img1} width="36" />
          </div>
          <div className="font-sans font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" id="node-I2187_63108-2168_4523-2168_4514">
            <p className="leading-[normal] whitespace-pre">Give me top 5 commercial spaces in Pune</p>
          </div>
        </motion.div>
        <div className="absolute content-stretch flex flex-col gap-6 items-center justify-start left-[309px] top-[556px] w-64" id="node-I2187_63108-2187_63304">
          <motion.div
            className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[8px] shrink-0 w-[226px] cursor-pointer"
            data-name="try-it-now-btn"
            id="node-I2187_63108-2171_4645"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div aria-hidden="true" className="absolute border border-[#2558a6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
            <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[27px]" data-name="TryThat.ai_GenAi_TransperentBg 3" id="node-I2187_63108-2171_4645-2179_62830" style={{ backgroundImage: `url('${img2}')` }} />
            <div className="font-sans font-semibold leading-[0] not-italic relative shrink-0 text-[#2558a6] text-[18px] text-nowrap" id="node-I2187_63108-2171_4645-2168_4643">
              <p className="leading-[normal] whitespace-pre">Try For Free</p>
            </div>
          </motion.div>
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full" data-name="Slider" id="node-I2187_63108-2059_5063">
            {tabs.map((_, index) => (
              <div key={index} className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-8" data-name="Dot" onClick={() => setActiveTab(index)}>
                <div className="relative shrink-0 size-5" data-name="Slider / Dot">
                  <img alt="" className="block max-w-none size-full" src={activeTab === index ? img3 : img4} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExplainerScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Explainer-Screen-Trythat.ai" data-node-id="2054:4172">
      <div className="absolute flex h-[108.66px] items-center justify-center left-[1862px] top-[508px] w-[106.844px]">
        <div className="flex-none rotate-[0.357deg]">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center opacity-40 p-[8px] relative w-[106.177px]" data-name="dotted-pattern" data-node-id="2187:63273">
            <DottedPattern />
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[1080px] left-0 top-0 w-[770px]" data-name="Side-bar-menu" data-node-id="2054:4173">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]" />
        <div className="absolute flex h-[108.66px] items-center justify-center left-[127px] top-[629px] w-[106.844px]">
          <div className="flex-none rotate-[0.357deg]">
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center opacity-40 p-[8px] relative w-[106.177px]" data-name="dotted-pattern" data-node-id="2054:4174">
              <DottedPattern />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[82.234px] items-center justify-center left-[644px] top-[-57px] w-[80.852px]">
          <div className="flex-none rotate-[0.357deg]">
            <div className="box-border content-stretch flex flex-col gap-2 h-[81.738px] items-start justify-center opacity-40 p-[8px] relative w-[80.358px]" data-name="dotted-pattern" data-node-id="2054:4175">
              <DottedPattern />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[1419.612px] items-center justify-center left-[2608px] top-[703px] w-[1414.773px]">
          <div className="flex-none rotate-[314.651deg]">
            <div className="h-[721.484px] object-cover w-[1282.79px]" data-name="2535858_Wave_Background_1920x1080 1" data-node-id="2054:4176" />
          </div>
        </div>
        <motion.div
          className="absolute bg-white box-border content-stretch flex flex-col gap-8 items-start justify-start left-[111px] p-[24px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)] top-[590px] w-[601px] cursor-pointer"
          data-name="Signup-dialog/Try-now"
          data-node-id="2054:4196"
          whileHover={{ y: -5 }}
        >
          <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-3 relative rounded-[8px] shrink-0 w-full" data-name="try-it-now-btn" id="node-I2054_4196-2179_5082">
            <div aria-hidden="true" className="absolute border border-[#2558a6] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
            <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[27px]" data-name="TryThat.ai_GenAi_TransperentBg 3" id="node-I2054_4196-2179_5082-2179_62830" style={{ backgroundImage: `url('${img2}')` }} />
            <div className="font-sans font-semibold leading-[0] not-italic relative shrink-0 text-[#2558a6] text-[18px] text-nowrap" id="node-I2054_4196-2179_5082-2168_4643">
              <p className="leading-[normal] whitespace-pre">{`Try For Free `}</p>
            </div>
          </div>
        </motion.div>
        <div className="absolute content-stretch flex flex-col gap-8 items-center justify-center left-[204px] top-[165px] w-[418.311px]" data-node-id="2192:63589">
          <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#424242] text-[48px] text-nowrap" data-node-id="2182:62947">
            <p className="leading-[60px] whitespace-pre">{`Hey There! Meet `}</p>
          </div>
          <div className="content-stretch flex flex-col items-center justify-start leading-[0] relative shrink-0" data-node-id="2192:63590">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Clip path group" data-node-id="2054:4177">
              <div className="[grid-area:1_/_1] h-[47.505px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.764px_-16.057px] mask-size-[253.312px_78.58px] ml-[-0.301%] mt-[20.433%] relative w-[222.411px]" data-name="Group" data-node-id="2054:4180" style={{ maskImage: `url('${imgGroup}')` }}>
                <img alt="" className="block max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
            <div className="font-semibold not-italic relative shrink-0 text-[0px] text-white w-[290px]" data-node-id="2054:4197">
              <p className="leading-[42px] text-[24px]">
                <span className="text-[#424242]">Your</span>
                <span className=""> </span>
                <span className="text-[#ffa31d]">{`AI Property Advisor `}</span>
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute inset-[16.02%_72.21%_80.37%_22.73%]"
          data-name="Emoji"
          data-node-id="2184:62957"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        >
          <img alt="" className="block max-w-none size-full" src={imgEmoji} />
        </motion.div>
        <div className="absolute font-semibold leading-[0] not-italic text-[#424242] text-[18px] text-nowrap top-[412px]" data-node-id="2184:62990" style={{ left: "calc(50% - 131px)" }}>
          <p className="leading-[normal] whitespace-pre">Insight. Accuracy. Confidence.</p>
        </div>
        <div className="absolute font-normal leading-[0] not-italic text-[#424242] text-[16px] top-[452px] w-[596px]" data-node-id="2184:62992" style={{ left: "calc(50% - 266px)" }}>
          <p className="leading-[24px]">Discover real estate like never before,Navigate the real estate market with precision. From AI-powered search and in-depth market analysis to property comparisons and investment insights, TryThat.ai delivers real-time intelligence that helps you make smarter, faster, and more profitable decisions.</p>
        </div>
      </div>
      <div className="absolute font-semibold leading-[0] left-[1185px] not-italic text-[#616161] text-[30px] text-nowrap top-10" data-node-id="2054:4198">
        <p className="leading-[45px] whitespace-pre">{`See `}</p>
      </div>
      <div className="absolute inset-[3.8%_23.77%_92.04%_65.26%]" data-name="Group" data-node-id="2054:4205">
        <img alt="" className="block max-w-none size-full" src={imgGroup2} />
      </div>
      <div className="absolute font-semibold leading-[0] left-[1476px] not-italic text-[#616161] text-[30px] text-nowrap top-10" data-node-id="2054:4221">
        <p className="leading-[45px] whitespace-pre">in action</p>
      </div>
      <div className="absolute font-medium leading-[0] left-[1164px] not-italic text-[#616161] text-[16px] text-nowrap top-[113px]" data-node-id="2054:4222">
        <p className="leading-[normal] whitespace-pre">Get AI driven deep data insights for all your property decisions</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-7 items-center justify-start left-[859px] top-[171px] w-[971px]" data-name="Features-Tabs-With-Slider" data-node-id="2187:63235">
        <FeaturesTabsWithSlider />
      </div>
    </div>
  );
}
