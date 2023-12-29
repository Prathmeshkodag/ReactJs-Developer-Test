import React from 'react'
import {  Img, Line,  Text,  } from "components";

export default function Page1() {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-start p-[102px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start p-[102px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1170px] mb-[15px] mx-auto w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-1.44px]"
              size="txtInterSemiBold48"
            >
              Choose the learning category you need.
            </Text>
            <Text
              className="leading-[160.00%] mt-3.5 text-center text-white-A700_cc text-xl tracking-[-0.60px] w-[53%] sm:w-full"
              size="txtInterRegular20"
            >
              Cupcake danish tiramisu powder soda ginger cake. Dessert carrot
              cake tartsweet marzipan for fruitcake.
            </Text>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[55px] w-full">
              <div className="bg-blue-50 md:h-[161px] h-[300px] p-[39px] sm:px-5 relative rounded-[16px] w-[49%] md:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-3/5">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.72px]"
                    size="txtInterSemiBold24"
                  >
                    Programming
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-[7px] text-base text-black-900_cc"
                    size="txtInterRegular16Black900cc"
                  >
                    <>
                      Muffin lemon drops toffee.
                      <br />
                      roll brownie jelly beans.
                      <br />
                      Croissant chocolate cake too
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-3 w-auto">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterSemiBold16"
                    >
                      Learn more{" "}
                    </Text>
                    <Img
                      className="h-full w-5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[161px] inset-y-[0] my-auto right-[13%]"
                  src="images/img_illustration_gray_300.svg"
                  alt="illustration_One"
                />
              </div>
              <div className="bg-purple-50 md:h-[148px] h-[300px] p-10 sm:px-5 relative rounded-[16px] w-[49%] md:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-3/5">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.72px]"
                    size="txtInterSemiBold24"
                  >
                    Graphic Design
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-[7px] text-base text-black-900_cc"
                    size="txtInterRegular16Black900cc"
                  >
                    <>
                      Muffin lemon drops toffee.Croissant chocolate cake tootsie
                      roll. <br />
                      Cupcake sugar.
                    </>
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-[13px] w-auto">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterSemiBold16"
                    >
                      Learn more{" "}
                    </Text>
                    <Img
                      className="h-full w-5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col right-[13%] top-[20%] w-[33%]">
                  <div className="h-[152px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
                    <div className="h-[152px] md:h-[47px] m-auto w-full">
                      <div className="h-[152px] md:h-[47px] m-auto w-full">
                        <div className="absolute h-[152px] md:h-[47px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute h-[152px] md:h-[47px] inset-[0] justify-center m-auto w-full">
                            <div className="h-[152px] md:h-[47px] m-auto w-full">
                              <div className="absolute h-[152px] md:h-[47px] inset-[0] justify-center m-auto w-full">
                                <div className="absolute h-[123px] md:h-[47px] right-[8%] top-[0] w-[74%]">
                                  <div className="h-[123px] md:h-[47px] m-auto w-full">
                                    <div className="absolute h-[123px] inset-[0] justify-center m-auto w-full">
                                      <Img
                                        className="h-[17px] mb-[undefinedpx] mt-[45px] mx-auto z-[1]"
                                        src="images/img_user_gray_900_01_17x19.svg"
                                        alt="user_Four"
                                      />
                                      <Img
                                        className="h-[17px] mb-[undefinedpx] mt-[45px] mx-auto z-[1]"
                                        src="images/img_vector.svg"
                                        alt="vector_Nine"
                                      />
                                      <Img
                                        className="h-8 mb-[-13.66px] ml-9 z-[1]"
                                        src="images/img_user_white_a700_32x43.svg"
                                        alt="user_Five"
                                      />
                                      <Img
                                        className="h-[33px] mb-[undefinedpx] ml-9 z-[1]"
                                        src="images/img_mobile.svg"
                                        alt="mobile"
                                      />
                                      <div className="h-[104px] md:h-[NaNpx] mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
                                        <div className="absolute bottom-[0] md:h-[86px] h-[88px] inset-x-[0] mx-auto w-full">
                                          <div className="absolute bottom-[2%] h-[77px] inset-x-[0] mx-auto w-full">
                                            <div className="absolute h-[77px] inset-[0] justify-center m-auto w-[99%]">
                                              <div className="absolute h-[77px] inset-[0] justify-center m-auto w-full">
                                                <div className="absolute flex flex-row h-full inset-[0] items-start justify-center m-auto w-full">
                                                  <div className="h-0.5 md:h-[7px] mt-[5px] relative w-0.5">
                                                    <Img
                                                      className="h-px m-auto w-px"
                                                      src="images/img_vector_white_a700_1x1.svg"
                                                      alt="vector"
                                                    />
                                                    <Img
                                                      className="absolute h-0.5 inset-[0] justify-center m-auto w-0.5"
                                                      src="images/img_vector_gray_900_01_2x2.svg"
                                                      alt="vector_One"
                                                    />
                                                  </div>
                                                  <div className="md:h-[18px] h-[5px] mt-[13px] relative w-[8%]">
                                                    <Img
                                                      className="h-1 m-auto"
                                                      src="images/img_vector_white_a700_4x9.svg"
                                                      alt="vector_Two"
                                                    />
                                                    <Img
                                                      className="absolute h-[5px] inset-[0] justify-center m-auto"
                                                      src="images/img_vector_gray_900_01_5x10.svg"
                                                      alt="vector_Three"
                                                    />
                                                  </div>
                                                  <div className="h-[38px] md:h-[58px] mt-5 relative w-[19%]">
                                                    <Img
                                                      className="h-[37px] m-auto"
                                                      src="images/img_user.svg"
                                                      alt="user"
                                                    />
                                                    <Img
                                                      className="absolute h-[38px] inset-[0] justify-center m-auto"
                                                      src="images/img_thumbsup.svg"
                                                      alt="thumbsup"
                                                    />
                                                  </div>
                                                  <div className="md:h-[76px] h-[77px] relative w-[64%]">
                                                    <Img
                                                      className="h-[76px] m-auto"
                                                      src="images/img_user_gray_900_01.svg"
                                                      alt="user_One"
                                                    />
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[5px] w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group7.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        className="h-[35px] mb-[29px]"
                                                        src="images/img_checkmark.svg"
                                                        alt="checkmark"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <Img
                                                  className="absolute h-5 left-[0] top-[6%]"
                                                  src="images/img_user_white_a700.svg"
                                                  alt="user_Two"
                                                />
                                                <Img
                                                  className="absolute h-[21px] left-[0] top-[6%]"
                                                  src="images/img_thumbsup_gray_900_01.svg"
                                                  alt="thumbsup_One"
                                                />
                                              </div>
                                              <Img
                                                className="absolute h-1.5 left-[11%] top-[29%] w-[5px]"
                                                src="images/img_vector_white_a700_6x5.svg"
                                                alt="vector_Four"
                                              />
                                              <Img
                                                className="absolute h-1.5 left-[10%] top-[29%] w-1.5"
                                                src="images/img_settings.svg"
                                                alt="settings"
                                              />
                                            </div>
                                            <Img
                                              className="absolute h-px left-[16%] top-[36%] w-px"
                                              src="images/img_vector_1x1.svg"
                                              alt="vector_Five"
                                            />
                                            <Img
                                              className="absolute h-0.5 left-[16%] top-[36%] w-0.5"
                                              src="images/img_vector_2x2.svg"
                                              alt="vector_Six"
                                            />
                                            <Img
                                              className="absolute h-[52px] inset-y-[0] left-[0] my-auto"
                                              src="images/img_thumbsup_white_a700.svg"
                                              alt="thumbsup_Two"
                                            />
                                            <div
                                              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto p-[5px] w-1/4"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group8.svg')",
                                              }}
                                            >
                                              <Img
                                                className="h-[3px] mb-[29px] mt-[9px]"
                                                src="images/img_vector_gray_900_01_3x8.svg"
                                                alt="vector_Seven"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-3 right-[13%] w-[89px]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group6.svg')",
                                            }}
                                          >
                                            <Line className="bg-gray-900_01 h-[27px] mb-[30px] mt-[5px] w-0.5" />
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-[41px] right-1/4 top-[0]"
                                          src="images/img_user_indigo_a700.svg"
                                          alt="user_Three"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute h-[46px] left-[35%] top-[7%]"
                                      src="images/img_vector_white_a700.svg"
                                      alt="vector_Ten"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-row h-[47px] items-start justify-center left-[35%] pl-[5px] py-[5px] top-[7%] w-[23%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group9.svg')",
                                      }}
                                    >
                                      <Img
                                        className="h-0.5 mt-[7px] w-0.5"
                                        src="images/img_vector_1.svg"
                                        alt="vector_Eleven"
                                      />
                                      <div className="md:h-[15px] h-[31px] my-0.5 relative w-[93%]">
                                        <div className="absolute bottom-[0] md:h-[11px] h-[29px] right-[0] w-[92%]">
                                          <div className="absolute h-[11px] right-[0] top-[0] w-[37%]">
                                            <Img
                                              className="h-2.5 m-auto"
                                              src="images/img_contrast.svg"
                                              alt="contrast"
                                            />
                                            <Img
                                              className="absolute h-[11px] inset-[0] justify-center m-auto"
                                              src="images/img_contrast_gray_900_01.svg"
                                              alt="contrast_One"
                                            />
                                          </div>
                                          <div className="absolute bottom-[0] h-[11px] left-[9%] w-[41%]">
                                            <Img
                                              className="h-2.5 m-auto"
                                              src="images/img_user_gray_900_01_10x8.svg"
                                              alt="user_Six"
                                            />
                                            <Img
                                              className="absolute h-[11px] inset-[0] justify-center m-auto"
                                              src="images/img_settings_gray_900_01.svg"
                                              alt="settings_One"
                                            />
                                          </div>
                                          <div className="absolute h-2 left-[0] top-[10%] w-[19%]">
                                            <Img
                                              className="h-[7px] m-auto"
                                              src="images/img_vector_white_a700_7x3.svg"
                                              alt="vector_Twelve"
                                            />
                                            <Img
                                              className="absolute h-2 inset-[0] justify-center m-auto"
                                              src="images/img_vector_gray_900_01_8x4.svg"
                                              alt="vector_Thirteen"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-[3px] left-1/4 top-[10%] w-0.5"
                                          src="images/img_vector_gray_900_01_3x2.svg"
                                          alt="vector_Fourteen"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat bottom-[26%] flex md:h-1 h-[7px] justify-end left-[0] pl-0.5 pt-0.5 w-[38%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group12.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[3px] ml-auto mt-auto"
                                            src="images/img_vector_gray_900_01_3x6.svg"
                                            alt="vector_Fifteen"
                                          />
                                          <Img
                                            className="absolute bottom-[0] h-1 right-[0]"
                                            src="images/img_vector_gray_900_01_4x6.svg"
                                            alt="vector_Sixteen"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-2 left-[13%] top-[0]"
                                          src="images/img_user_gray_900_01_8x12.svg"
                                          alt="user_Seven"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-2 left-[33%] top-[15%]"
                                    src="images/img_user_8x12.svg"
                                    alt="user_Eight"
                                  />
                                </div>
                                <Img
                                  className="absolute h-px inset-x-[0] mx-auto top-[13%]"
                                  src="images/img_vector_gray_900_01_1x3.svg"
                                  alt="vector_Seventeen"
                                />
                                <Img
                                  className="absolute bottom-[0] h-10 inset-x-[0] mx-auto"
                                  src="images/img_vector_1x1.svg"
                                  alt="vector_Eighteen"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[19px] h-[41px] inset-x-[0] mx-auto p-2 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group11.svg')",
                                  }}
                                >
                                  <div className="absolute bottom-[20%] h-5 right-[12%] w-[19%]">
                                    <Img
                                      className="h-2.5 mb-[-1.78px] z-[1]"
                                      src="images/img_user_white_a700_10x12.svg"
                                      alt="user_Nine"
                                    />
                                    <Img
                                      className="h-[11px] mb-[undefinedpx] w-3 z-[1]"
                                      src="images/img_settings_gray_900_01_11x12.svg"
                                      alt="settings_Three"
                                    />
                                    <div className="h-2.5 md:h-[NaNpx] mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
                                      <Img
                                        className="h-2.5 m-auto"
                                        src="images/img_contrast_white_a700.svg"
                                        alt="contrast_Two"
                                      />
                                      <Img
                                        className="absolute h-2.5 inset-[0] justify-center m-auto"
                                        src="images/img_settings_blue_gray_100.svg"
                                        alt="settings_Two"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[19px] right-[15%] top-[20%]"
                                    src="images/img_thumbsup_white_a700_19x22.svg"
                                    alt="thumbsup_Three"
                                  />
                                  <Img
                                    className="absolute h-[19px] right-[15%] top-[20%]"
                                    src="images/img_thumbsup_gray_900_01_19x22.svg"
                                    alt="thumbsup_Four"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[17%] h-11 left-[13%]"
                                src="images/img_contrast_white_a700_44x84.svg"
                                alt="contrast_Three"
                              />
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[17%] flex flex-col h-[45px] items-center justify-start left-[13%] pr-0.5 pt-0.5 w-[46%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group10.svg')",
                                }}
                              >
                                <Img
                                  className="h-[42px]"
                                  src="images/img_television.svg"
                                  alt="television"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute bottom-[17%] h-[42px] left-[13%]"
                              src="images/img_thumbsup_gray_900_01_42x83.svg"
                              alt="thumbsup_Five"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[13%] h-6 left-[19%]"
                            src="images/img_refresh.svg"
                            alt="refresh"
                          />
                          <Img
                            className="absolute bottom-[12%] h-[25px] left-[19%]"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[22%] h-[46px] right-[17%]"
                          src="images/img_maximize.svg"
                          alt="maximize"
                        />
                        <Img
                          className="absolute bottom-[22%] h-[46px] right-[17%]"
                          src="images/img_vector_gray_900_01.svg"
                          alt="vector_Nineteen"
                        />
                      </div>
                      <Img
                        className="absolute h-[17px] right-[29%] top-[28%] w-[18px]"
                        src="images/img_checkmark_gray_900_01.svg"
                        alt="checkmark_One"
                      />
                    </div>
                    <div className="absolute bottom-[17%] flex flex-col gap-[37px] justify-start right-[16%] w-[42%]">
                      <div className="flex flex-row items-start justify-start mr-[9px] w-[89%] md:w-full">
                        <Img
                          className="h-[17px]"
                          src="images/img_vector_gray_900_01_17x13.svg"
                          alt="vector_Twenty"
                        />
                        <Line className="bg-gray-900_01 h-5 ml-[33px] mt-4 w-1" />
                        <Img
                          className="h-[11px] mt-3"
                          src="images/img_settings_gray_900_01_11x14.svg"
                          alt="settings_Four"
                        />
                      </div>
                      <Img
                        className="h-2.5 md:ml-[0] ml-[54px]"
                        src="images/img_user_gray_900_01_10x22.svg"
                        alt="user_Ten"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-2.5 mb-[33px] ml-auto mr-[29px] mt-[-NaNpx] z-[1]"
                    src="images/img_favorite.svg"
                    alt="favorite"
                  />
                  <Img
                    className="h-[11px] ml-auto mr-[66px] mt-[-NaNpx] z-[1]"
                    src="images/img_megaphone.svg"
                    alt="megaphone"
                  />
                  <div className="bg-white-A700 h-[7px] mt-[-0.34px] mx-auto w-full z-[1]"></div>
                  <Img
                    className="h-[7px] mt-[-NaNpx] mx-auto z-[1]"
                    src="images/img_vector_blue_gray_100.svg"
                    alt="vector_TwentyThree"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
