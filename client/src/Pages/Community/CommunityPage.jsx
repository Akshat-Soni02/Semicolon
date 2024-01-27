import React from "react";

const RightSidebar = () => {
  return (
    <div className="mt-[120px] text-white flex-col  items-start justify-between pl-3 pr-3 pt-2 w-[250px] h-[500px] bg-[#252222] rounded-md">
      <div className="flex w-[100%] justify-between">
        <div className="flex flex-col text-2xl justify-center">About</div>
        <div className="flex flex-col text-2xl justify-center">:</div>
      </div>
      <div className="flex w-[100%] justify-between text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        praesentium debitis accusantium iure in, aliquam sequi explicabo
        molestiae blanditiis! Alias veritatis deleniti expedita illo! Hic veniam
        tempore voluptate ipsa facilis!
      </div>
    </div>
  );
};

const CommunityPage = () => {
  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/381/988/original/vector-abstract-colorful-dotted-banner-background.jpg"
        alt="Community"
        className="h-[240px] object-cover w-full"
      />
      <div className="flex pl-48 absolute  bg-[#252222] w-[100%]">
        <div className="flex items-center text-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Community"
            className="h-[100px] object-cover w-[100px] relative -top-3"
          />
          <p className="pl-2 text-4xl mb-8 font-bold">Community Name</p>
          <button
            className="ml-8 mb-5 bg-[#252222] text-white text-xl border-2 border-white px-4 py-1 rounded-full"
            type="button"
          >
            Join
          </button>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default CommunityPage;
