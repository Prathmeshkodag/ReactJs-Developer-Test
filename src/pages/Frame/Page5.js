import React from 'react'
import { Button, Img, Input,  Text, TextArea } from "components";

export default function Page5() {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-end p-[110px] md:px-10 sm:px-5 w-full">
    <div className="flex flex-col items-center justify-start max-w-[1170px] mt-1 mx-auto w-full">
      <Text
        className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-1.44px]"
        size="txtInterSemiBold48"
      >
        Contact us if you need.
      </Text>
      <Text
        className="leading-[160.00%] mt-8 text-center text-white-A700_cc text-xl tracking-[-0.60px] w-[53%] sm:w-full"
        size="txtInterRegular20"
      >
        Cupcake danish tiramisu powder soda ginger cake. Dessert carrot
        cake tartsweet marzipan for fruitcake.
      </Text>
      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[90px] w-full">
        <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
          <div className="flex flex-col items-center justify-start rounded-[7px] w-full">
            <Img
              className="h-[593px] md:h-auto object-cover rounded-[7px] w-full"
              src="images/img_screenshot32.png"
              alt="screenshotThirtyTwo"
            />
          </div>
        </div>
        <div className="flex md:flex-1 flex-col items-start justify-start w-[45%] md:w-full">
          <Input
            name="group3595"
            placeholder="Email"
            className="font-medium p-0 placeholder:text-gray-500 text-left text-xl tracking-[-0.60px] w-full"
            wrapClassName="w-full"
            type="email"
          ></Input>
          <Input
            name="group3596"
            placeholder="Subject"
            className="font-medium p-0 placeholder:text-gray-500 text-left text-xl tracking-[-0.60px] w-full"
            wrapClassName="mt-[46px] w-full"
          ></Input>
          <TextArea
            className="bg-black-900 border-0 font-medium mt-[46px] pb-[35px] pl-[26px] pr-[35px] pt-[23px] sm:px-5 rounded-[7px] placeholder:text-gray-500 text-gray-500 text-left text-xl tracking-[-0.60px] w-full"
            name="group3597"
            placeholder="Message"
          ></TextArea>
          <Button
            className="cursor-pointer font-medium min-w-[221px] mt-[42px] rounded-[7px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.72px]"
            color="black_900"
            size="md"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}
