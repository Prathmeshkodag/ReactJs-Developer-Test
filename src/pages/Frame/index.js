import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

const FramePage = () => {
  return (
    <>
      <div className="bg-black-900_33 flex flex-col font-inter gap-0.5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start pb-[213px] w-full">
          <div className="flex flex-col md:gap-10 gap-[122px] items-center justify-start w-full">
            <header className="bg-gray-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
              <Img
                className="h-[30px] md:ml-[0] ml-[135px] mr-[1170px] md:mt-0 my-[30px] w-[134px]"
                src="images/img_frame.svg"
                alt="frame"
              />
              <Text
                className="mb-[38px] absolute md:ml-[0] ml-[829px] mr-[568px] md:mt-0 mt-[33px] text-[15px] text-white-A700 tracking-[-0.45px]"
                size="txtInterSemiBold15"
              >
                Home
              </Text>
              <Text
                className="mb-[38px] absolute md:ml-[0] ml-[911px] mr-[477px] md:mt-0 mt-[33px] text-[15px] text-white-A700 tracking-[-0.45px]"
                size="txtInterSemiBold15"
              >
                Course
              </Text>
              <Text
                className="mb-[37px] absolute md:ml-[0] ml-[1002px] mr-[365px] md:mt-0 mt-[34px] text-[15px] text-white-A700 tracking-[-0.45px]"
                size="txtInterSemiBold15"
              >
                Testimony
              </Text>
              <Text
                className="mb-[38px] absolute md:ml-[0] ml-[1101px] mr-[282px] md:mt-0 mt-[33px] text-[15px] text-white-A700 tracking-[-0.45px]"
                size="txtInterSemiBold15"
              >
                Contact
              </Text>
              <Button
                className="cursor-pointer font-semibold absolute mb-[27px] min-w-[100px] md:ml-[0] ml-[1197px] mr-[142px] md:mt-0 mt-[21px] text-[15px] text-center tracking-[-0.45px]"
                shape="round"
              >
                Sign up
              </Button>
            </header>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[91px] items-center justify-start max-w-[1109px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[54%] md:w-full">
                <Text
                  className="leading-[110.00%] sm:text-[39px] md:text-[45px] text-[53px] text-white-A700 tracking-[-1.59px] w-full"
                  size="txtInterSemiBold53"
                >
                  <>Let&#39;s Learn New Course Gain More Skills</>
                </Text>
                <Text
                  className="leading-[160.00%] mt-[29px] text-white-A700_cc text-xl tracking-[-0.60px] w-[94%] sm:w-full"
                  size="txtInterRegular20"
                >
                  <>
                    Explore Indonesia&#39;s ground-breaking research and
                    educationnow.Watch this space,as eligible courses will
                    continue to beadded as they become available
                  </>
                </Text>
                <div className="border border-gray-200 border-solid flex flex-row gap-[162px] items-center justify-start mt-[67px] p-2 rounded-[33px] w-[85%] md:w-full">
                  <Text
                    className="ml-6 text-base text-white-A700_cc tracking-[-0.48px]"
                    size="txtInterRegular16"
                  >
                    Enter your email adress
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold h-[50px] min-w-[128px] rounded-[25px] text-base text-center"
                    size="sm"
                  >
                    Join Class
                  </Button>
                </div>
              </div>
              <Img
                className="h-[350px]"
                src="images/img_illustration.svg"
                alt="illustration"
              />
            </div>
          </div>
        </div>
          
               <Page1/>
              
               <Page2/>
       
               <Page3/>
       
               <Page4/>
        
              <Page5/>
        <footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full">
          <div className="bg-gray-900 flex flex-col h-[604px] md:h-auto items-center justify-center mt-0.5 md:px-10 sm:px-5 px-[120px] py-[100px] w-auto md:w-full">
            <div className="flex flex-col gap-[47px] items-center justify-center max-w-[1200px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-end justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[138px] items-start justify-between w-auto md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterBold16"
                    >
                      Product
                    </Text>
                    <ul className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Diam orci
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Mi feugiat
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Netus fermentum
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Suspendisse viverra
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Id dolor
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Erat mattis
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterBold16"
                    >
                      Information
                    </Text>
                    <ul className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">Nibh</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Egestas
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Dictum
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start w-[159px]">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterBold16"
                    >
                      Company
                    </Text>
                    <ul className="flex flex-col gap-3 h-[115px] md:h-auto items-start justify-start w-[159px] md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Id maecenas
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Id orci
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Magna ultricies
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700_99"
                        >
                          <Text size="txtInterRegular16WhiteA70099">
                            Quis risus
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-black-900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[42px] py-[30px] rounded-[5px] w-auto">
                  <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtInterBold16"
                    >
                      Subscribe
                    </Text>
                    <div className="bg-white-A700 border border-blue_gray-100_02 border-solid flex flex-row gap-14 items-center justify-start pl-[15px] rounded-md w-[248px]">
                      <Text
                        className="flex-1 text-gray-800_90 text-sm w-auto"
                        size="txtInterRegular14Gray80090"
                      >
                        Email address
                      </Text>
                      <div className="bg-indigo-A400 flex flex-col items-center justify-center p-[13px] rounded-br-md rounded-tr-md w-[50px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[254px] md:max-w-full text-white-A700_99 text-xs"
                      size="txtInterRegular12WhiteA70099"
                    >
                      Gravida sed justo, justo, id est et. Amet tristique
                      convallis sed porttitor nullam eu ut. Duis et odio aliquam
                      bibendum. Metus et lectus id viverra fringilla magna
                      morbi.{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                <Line className="bg-white-A700_5f h-px outline outline-[0.5px] outline-white-A700_5f w-full" />
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[45px] w-[204px]"
                    src="images/img_logo.svg"
                    alt="logo"
                  />
                  <div className="flex flex-row gap-9 items-start justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtInterMedium14"
                    >
                      Terms
                    </Text>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtInterMedium14">Privacy</Text>
                    </a>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtInterMedium14"
                    >
                      Cookies
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-start p-[7px] w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group3592.svg')",
                      }}
                    >
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconlucideicon.svg"
                        alt="iconlucideicon"
                      />
                    </div>
                    <div className="flex flex-col h-[35px] items-center justify-start w-[35px]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-start p-[7px] w-[35px]"
                        style={{
                          backgroundImage: "url('images/img_group3592.svg')",
                        }}
                      >
                        <Img
                          className="h-5 w-5"
                          src="images/img_iconlucideicon_white_a700.svg"
                          alt="iconlucideicon_One"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[35px] items-center justify-end p-[7px] w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group3592.svg')",
                      }}
                    >
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconlucideicon_white_a700_20x20.svg"
                        alt="iconlucideicon_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FramePage;
