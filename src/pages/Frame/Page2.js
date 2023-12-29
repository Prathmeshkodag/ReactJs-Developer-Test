import React from 'react'
import {  Img,  Line,  Text, } from "components";

export default function Page2() {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-start p-[122px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1170px] mb-[23px] mx-auto w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-1.44px]"
              size="txtInterSemiBold48"
            >
              Choose the course you want to study.
            </Text>
            <Text
              className="leading-[160.00%] mt-[29px] text-center text-white-A700_cc text-xl tracking-[-0.60px] w-[53%] sm:w-full"
              size="txtInterRegular20"
            >
              Cupcake danish tiramisu powder soda ginger cake. Dessert carrot
              cake tartsweet marzipan for fruitcake.
            </Text>
            <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[62px] w-full">
              <div className="bg-gray-900 border border-solid border-white-A700_19 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[22px] sm:px-5 rounded-[24px] w-full">
                <div className="bg-gray-100 flex flex-col h-[167px] items-center justify-start ml-2.5 sm:ml-[0] sm:mt-0 mt-1 p-[25px] sm:px-5 rounded-[24px] w-[167px]">
                  <div className="flex flex-col items-center justify-start my-1.5 w-[99%] md:w-full">
                    <div className="md:h-[82px] h-[85px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-1.5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group13.svg')",
                        }}
                      >
                        <div className="bg-blue_gray-900 flex flex-col h-1 items-center justify-start mt-[66px] rounded-[50%] w-1">
                          <Img
                            className="h-1 rounded-tl-[50%] rounded-tr-[50%] w-1"
                            src="images/img_vector_blue_gray_900_01.svg"
                            alt="vector"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat md:h-14 h-[67px] inset-x-[0] mx-auto p-1 top-[0] w-full"
                        style={{
                          backgroundImage: "url('images/img_group14.svg')",
                        }}
                      >
                        <div className="md:h-14 h-[58px] m-auto w-[93%]">
                          <div className="md:h-14 h-[58px] m-auto w-full">
                            <div className="absolute bg-gray-100_01 flex flex-col h-full inset-[0] items-center justify-center m-auto pt-3 px-3 w-full">
                              <Img
                                className="h-7"
                                src="images/img_vector_deep_orange_100.svg"
                                alt="vector_One"
                              />
                              <Img
                                className="h-0.5"
                                src="images/img_vector_amber_300.svg"
                                alt="vector_Two"
                              />
                              <Img
                                className="h-3.5 w-[13px]"
                                src="images/img_reply.svg"
                                alt="reply"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[45px] right-[39%]"
                              src="images/img_vector_black_900.svg"
                              alt="vector_Three"
                            />
                          </div>
                          <Line className="absolute bg-blue_gray-900 h-[15px] inset-x-[0] mx-auto top-[21%] w-px" />
                        </div>
                        <div className="absolute flex flex-col gap-[13px] items-start justify-start right-[37%] top-[13%] w-[14%]">
                          <Img
                            className="h-2"
                            src="images/img_vector_light_blue_a700.svg"
                            alt="vector_Five"
                          />
                          <div className="bg-pink-400 h-1 rounded-[50%] w-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[13px] h-[17px] relative w-[34%]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-4 inset-x-[0] items-center justify-start mx-auto top-[0] w-[88%]"
                        style={{
                          backgroundImage: "url('images/img_group15.svg')",
                        }}
                      >
                        <Img
                          className="h-[5px] mb-2"
                          src="images/img_vector_gray_400_01.svg"
                          alt="vector_Seven"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                        src="images/img_vector_gray_400_01_1x39.svg"
                        alt="vector_Eight"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col items-start justify-start mr-[11px] w-[57%] sm:w-full">
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    Graphic Design
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-0.5 text-base text-white-A700_cc w-full"
                    size="txtInterRegular16"
                  >
                    Muffin lemon drops toffee. Pudding tootsie roll brownie
                    jelly beans.{" "}
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-3 w-auto">
                    <Text
                      className="text-base text-white-A700"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Learn more{" "}
                    </Text>
                    <Img
                      className="h-full w-5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-solid border-white-A700_19 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[22px] sm:px-5 rounded-[24px] w-full">
                <Img
                  className="h-[167px] ml-2.5 sm:ml-[0] sm:mt-0 mt-1 rounded-[24px] w-[167px]"
                  src="images/img_frame_deep_purple_50.svg"
                  alt="frame"
                />
                <div className="flex flex-col items-start justify-start mr-[11px]">
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    Back-end Programming
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-0.5 text-base text-white-A700_cc w-full"
                    size="txtInterRegular16"
                  >
                    Muffin lemon drops toffee. Pudding tootsie roll brownie
                    jelly beans.{" "}
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-3 w-auto">
                    <Text
                      className="text-base text-white-A700"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Learn more{" "}
                    </Text>
                    <Img
                      className="h-full w-5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[22px] sm:px-5 w-full">
                <Img
                  className="h-[167px] ml-2.5 sm:ml-[0] sm:mt-0 mt-1 rounded-[24px] w-[167px]"
                  src="images/img_frame_yellow_50.svg"
                  alt="frame"
                />
                <div className="flex flex-col items-start justify-start mr-[11px]">
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    UI UX Design
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-0.5 text-base text-white-A700_cc w-full"
                    size="txtInterRegular16"
                  >
                    Muffin lemon drops toffee. Pudding tootsie roll brownie
                    jelly beans.{" "}
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-3 w-auto">
                    <Text
                      className="text-base text-white-A700"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Learn more{" "}
                    </Text>
                    <Img
                      className="h-full w-5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-solid border-white-A700_19 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[22px] sm:px-5 rounded-[24px] w-full">
                <Img
                  className="h-[167px] ml-2.5 sm:ml-[0] sm:mt-0 mt-1 rounded-[24px] w-[167px]"
                  src="images/img_frame_red_50.svg"
                  alt="frame"
                />
                <div className="flex flex-col items-start justify-start mr-[11px]">
                  <Text
                    className="text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    Front-end Programming
                  </Text>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700_cc w-full"
                    size="txtInterRegular16"
                  >
                    Muffin lemon drops toffee. Pudding tootsie roll brownie
                    jelly beans.{" "}
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-3 w-[37%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Learn more{" "}
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
