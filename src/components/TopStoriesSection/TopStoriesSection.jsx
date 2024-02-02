"use client";

import React from "react";
import TopStoriesCard from "./TopStoriesCard/TopStoriesCard";

function TopArticleSection() {
  const isPublished = false;

  return (
    <div className="mb-[1rem]">
      <h2 className="font-urubanist text-[25px] font-semibold">Top Stories</h2>

      {/* slider */}
      <div className="flex gap-5 h-fit w-full overflow-x-auto m-[36px_0px]">
        {/* items */}
        <TopStoriesCard
          category={"Bussiness"}
          banner={
            "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1MYJeatG66NDI-1tvg9e8PHf~etrR-ZNzrDT0QymvzSArV161hJtHsc0qWG2~Arnp~4BhQxNc90VWgaLZYEM2c-fmxCLF4e3V7xVjrLlPNGdtHyoceOqepNCY3pdX5pArgw2zO~PQcUe5ZvxXTiYD5Oq-ZunycV9RsD2iYHyjV9Qipp~qxgm4qUcrL9sFLt7HcafNd1LkT2V4hhN0Kh50uPayQHf277SegRIkH6Sr4V7m2Tv6ZYn7aeLOaNhIJz2vJmxP14NMNnj08b43sT~mYGWPHOazqOUWk7xcJSn-OUHTpTlAPZa-xrm7DrUsktaYgJ~Ccr2l-GlRq9xvirDQ__"
          }
          title={"7 Rules of Effective Branding"}
          isPublished={true}
          isCreated={false}
          isDraft={false}
        />
        <TopStoriesCard
          category={"economy"}
          banner={
            "https://s3-alpha-sig.figma.com/img/9460/88e4/1fcf6ae1c41573d1edb5f8df03f55286?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pOfdVDFwOh5RcxPTqxygaV3NjBgCrcjRk4xYBmrh5tWg1n7v5TPDA7DwXUijXQIJTOSMQ9V~0f3~4wilXytrxF-9v48Ww3NjCLDJaakX34lKR1mvjDgWoXKNLsxetFZcPSn1vy1YWF2RZPpuyd9osCpMfw88v~5VZMI1u6ZXcBc1uaqJVgTiR-zkBSjHcww357MqtHLjFvGFDZhnq4OGlWfnZc1ai7tXl8pLDJ28zNIK2SgfmghlL1YKnSFROMx87tJYfwbi0HSXtGvIlp11nNt0ZDUvdidDqYubxu8IGZ0jMdj85MoVqmsOR3SzFQu8Fb1Zh7FkY727b~4h-PmOcg__"
          }
          title={"Chez pierre restaurant in Monte Carlo by Vuidafieri"}
          isPublished={false}
          isCreated={true}
          isDraft={false}
        />

        <TopStoriesCard
          category={"Politics"}
          banner={
            "https://s3-alpha-sig.figma.com/img/76f2/c230/759217edfe5f1a091005f8427421914b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqC4ussHPXxuNSmc2hMfucgNc177mydiPBH7llAybh~9gF0t1Spc9KcE0YVSStXZ7CQNLmfEhG~e9c37RveFjlrJnV55Yv1S4f40YIAk7x3qlFv7dYyDMnyYn5NOiEUsMciME0okV7-9FYVJi2ZUSFxTq3EvDEjRmTOwBVBv~R~jIb4N9I8K9Yo-c6gf2EoYcdeIJZ3WMGv2tne6~Mbsx94giB8JAfVgJlHcyc98rmLU6Trf4kHg9R7P28N9sO3TeQM3eO~iFTkz~4KdxV1VhXmzYY2bTu~~J1B4EPplBucl6oJpU7tpBWAaDFttu2ttuEp6oQkC9BpvWcl8gqxGIg__"
          }
          title={"Teknion wins Gold at 2022 International Design Awards"}
          isPublished={false}
          isCreated={false}
          isDraft={true}
        />

        <TopStoriesCard
          category={"Bussiness"}
          banner={
            "https://s3-alpha-sig.figma.com/img/8961/e90a/522b89a6e06ce18044367a842aca9275?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsL~-vLodp4kD7h8n69Go-u7PjxqG78PgHr6FFfMBEBVR9dfovZjnMnG65G1zC31pUEg-7~YQBHsbGWSLJqXIcKqp3IkGfZD8cwB1oH4lkYezVpmyKAhiOcyT0kRNE9leWAvEqpjZe60w8T6MPGBYPgHyuuoIaYPgCPzkthRrOX4TNu0bxYW8kTqyYPAZyhC16wjOTjLi3S74ZEMfrQcBKTtCMQdGAwNb3FlyLUMIlA61mU1jEXzq1q8oj3UpvzLa~afntHH8K5tDE4z6ysIy02HGWiKYgNsq0CWw8BnQrKQVGDLmfuoqD3WrczSTkki9cTjSUFnHUZYwaIWAvDjsg__"
          }
          title={"How 7 lines code turned into $36 Billion Empire"}
          isPublished={true}
          isCreated={false}
          isDraft={false}
        />
      </div>
    </div>
  );
}

export default TopArticleSection;
