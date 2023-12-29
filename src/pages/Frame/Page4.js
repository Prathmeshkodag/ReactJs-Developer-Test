import React from 'react'
import {  Img, List, Text,  } from "components";


export default function Page4() {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-end p-[82px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1170px] mt-8 mx-auto w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-1.44px]"
              size="txtInterSemiBold48"
            >
              <>What our customersare saying.</>
            </Text>
            <Text
              className="leading-[160.00%] mt-[29px] text-center text-white-A700_cc text-xl tracking-[-0.60px] w-[53%] sm:w-full"
              size="txtInterRegular20"
            >
              Cupcake danish tiramisu powder soda ginger cake. Dessert carrot
              cake tartsweet marzipan for fruitcake.
            </Text>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[91px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[272px] mx-auto object-cover rounded-[24px] w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="bg-black-900 border border-solid border-white-A700_19 flex flex-col gap-2.5 items-start justify-end mt-[-51px] mx-auto p-7 sm:px-5 rounded-[20px] w-full z-[1]">
                  <Text
                    className="ml-1 md:ml-[0] mt-[15px] text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    Stephanie
                  </Text>
                  <Text
                    className="leading-[160.00%] ml-1 md:ml-[0] text-base text-white-A700_cc w-[95%] sm:w-full"
                    size="txtInterRegular16"
                  >
                    The instructor’s clear and consistent focus on the four
                    basic principles of graphic design (contrast, repetition,
                    alignment, and proximity) kept the course very focused and
                    efficient. The reading material was clear and well
                    presented.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[277px] mx-auto object-cover rounded-[24px] w-full"
                  src="images/img_image_277x370.png"
                  alt="image"
                />
                <div className="bg-black-900 border border-solid border-white-A700_19 flex flex-col gap-2.5 items-start justify-end mt-[-56.32px] mx-auto p-[26px] sm:px-5 rounded-[20px] w-full z-[1]">
                  <Text
                    className="ml-1.5 md:ml-[0] mt-[19px] text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    Marcela
                  </Text>
                  <Text
                    className="leading-[160.00%] ml-1.5 md:ml-[0] text-base text-white-A700_cc w-[94%] sm:w-full"
                    size="txtInterRegular16"
                  >
                    I received my certificate, and I would like to thank you for
                    your support. Your course was challenging, but you were
                    always there supporting me and ready to help. I enjoyed your
                    class tremendously. I look forward to taking another class
                    with you.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col pb-[18px] relative w-full">
                <Img
                  className="h-[277px] mx-auto object-cover rounded-[24px] w-full"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="bg-black-900 border border-solid border-white-A700_19 flex flex-col gap-[11px] items-start justify-end mt-[-56.32px] mx-auto pt-8 sm:px-5 px-8 rounded-[20px] w-full z-[1]">
                  <Text
                    className="mt-3 text-white-A700 text-xl tracking-[-0.60px]"
                    size="txtInterSemiBold20"
                  >
                    Mario
                  </Text>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700_cc w-[98%] sm:w-full"
                    size="txtInterRegular16"
                  >
                    Doug adalah instruktur yang sangat baik yang benar-benar
                    tahu barang-barangnya. Dia jelas antusias dengan topik
                    tersebut dan itu membuat kursus ini sangat menyenangkan.
                    Bersedia berbagi ilmunya meskipun saya memiliki pertanyaan
                    yang melampaui materi pelajaran.
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
  )
}
