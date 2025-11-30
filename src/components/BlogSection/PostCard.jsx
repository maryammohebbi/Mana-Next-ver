import React from "react";

function PostCard() {
  return (
    <div className="w-[99%] lg:w-[49%] h-[90%] border border-secondary rounded-lg flex flex-col lg:flex-row">
      <div className="w-full h-[100px] lg:w-[250px] lg:h-full rounded-tr-lg rounded-br-lg bg-pink-50"></div>
      <div className="w-full h-auto lg:flex-1 p-2 rounded-tl-lg rounded-bl-lg bg-green-50">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum
          magni, mollitia, doloremque soluta vitae atque corporis optio iure
          earum tempore? Odit inventore quasi iusto! Laborum, repudiandae?
          Sequi, neque labore.
        </p>
      </div>
    </div>
  );
}

export default PostCard;
