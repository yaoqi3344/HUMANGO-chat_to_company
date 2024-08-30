import { FunctionComponent } from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full h-full relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[39px] px-[50px] pb-[79px] box-border gap-[39px] leading-[normal] tracking-[normal] lg:pl-[25px] lg:pr-[25px] lg:box-border gap-[19px]">
      <div className="w-full h-full relative bg-whitesmoke flex items-center justify-center">
        <header className="w-full flex flex-row items-end justify-between gap-5 max-w-full text-left text-xl text-gray font-inter mq750:w-[454px]">
          <nav className="m-0 w-full  flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full mq750:hidden">
            <nav className="m-0 h-[30px] self-stretch flex flex-row items-start justify-between gap-5 text-left text-xl text-gray font-inter">
              <img
              className="h-[100px] relative !m-[0] object-fit z-[1] mx-auto"

              alt=""
              src="/icon.png"
               />
              {/* <div className="w-[69px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px] z-[1]">

                  产品
                </a>
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[80px] z-[1]">

                背景故事
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[80px] z-[1]">

                联系我们
              </a>

              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[80px] z-[1]">

               
              </a> */}
             {/* <div className="rounded-8xs bg-gainsboro flex flex-row items-start justify-start pt-[13px] pb-2 pl-[42px] pr-10 z-[1]">
                <div className="h-[45px] w-[122px] relative rounded-8xs bg-gainsboro hidden" />
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[40px] z-[2]">

                  登陆
                </a>
              </div> */}
            </nav>
          </nav>
          
        </header>
        
      </div>
      <main className="w-full flex flex-row items-start justify-end py-0 px-[41px] box-border max-w-full">
        <section className="flex-1 flex flex-row items-start justify-start relative max-w-full text-left  text-black font-inter">
          <div className="flex-1 shadow-[0px_0px_20px_2px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start pt-11 px-[29px] pb-[21px] box-border max-w-full z-[2] mq450:pt-5 mq450:box-border mq1050:pt-[29px] mq1050:pb-5 mq1050:box-border">
            <div className="w-[1213px] h-[824px] relative shadow-[0px_0px_20px_2px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full z-[1]" />
            <div className="text-6xl w-[1000px] h-28 relative inline-block shrink-0 max-w-full z-[3] mq450:text-xl">
              <ul className="m-0 font-inherit text-inherit pl-[33px]">
                <strong>一键管理你的群聊信息 快速转化你的私域用户</strong>
              </ul>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[52px] max-w-full mt-[-83px] lg:flex-wrap gap-[26px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[415px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[131px] max-w-full gap-[65px] gap-[33px]">
                  <div className="self-stretch h-[545px] relative max-w-full">
                    <div className="absolute  top-[0px] left-[0px] w-[597px] flex flex-col items-start justify-start max-w-full">
                      <div className="w-[549px] relative inline-block shrink-0 max-w-full z-[4] mq450:text-xl">
                        <ul className="m-0 font-inherit text-inherit pl-[33px]">
                          <p className="text-2xl font-bold">📝 整理群聊对话，记录用户信息</p>
                          <p className="text-base mt-2">自动整理微信群/Telegram的群聊内容，系统化记录每个用户的信息。</p>
                        </ul>
                      </div>
                      <div className="w-[549px] relative inline-block shrink-0 max-w-full z-[5] mt-1 mq450:text-xl">
                        <ul className="m-0 font-inherit text-inherit pl-[33px]">
                          <p className="text-2xl font-bold">📊 分析用户画像，识别潜在付费用户</p>
                          <p className="text-base mt-2">通过数据分析，精准定位最可能成为付费客户的用户，提升转化率。</p>
                        </ul>
                      </div>
                      <div className="w-[549px] relative inline-block shrink-0 max-w-full z-[6] mt-1 mq450:text-xl">
                        <ul className="m-0 font-inherit text-inherit pl-[33px]">
                          <p className="text-2xl font-bold">🤖 群内机器人定制</p>
                          <p className="text-base mt-2">根据需求定制微信群/Telegram群内机器人，自动化运营管理，减轻人工负担。</p>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-3.5 text-mini">
                    <div className="flex flex-row items-start justify-start gap-[21px] mq450:flex-wrap">
                      <div className="relative [text-decoration:underline] leading-[18.4px] inline-block min-w-[111px] z-[3]">

                        HUMANGO相关
                      </div>
                      <div className="relative [text-decoration:underline] inline-block min-w-[60px] z-[3]">

                        隐私协议
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[42px] min-w-[456px] max-w-full text-silver lg:flex-1 mq750:min-w-full gap-[21px]">
                <div className="flex flex-row items-start justify-end pt-0 px-[19px] pb-5 box-border max-w-full">
                  <div className="absolute bottom-40 left-20 flex flex-col items-start justify-start gap-2.5 max-w-full">
                    <div className="flex flex-row items-start justify-center py-0 pl-0 pr-0.5 gap-[27px] mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">

                        <img
                          className="w-20 h-20 relative object-cover z-[3]"

                          loading="lazy"
                          alt=""
                          src="/r-1@2x.png"
                        />
                      </div>
                      <img
                        className="h-[100px] w-[100px] relative object-cover z-[3]"

                        loading="lazy"
                        alt=""
                        src="/r-1-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start pt-5 pb-0 pl-0 pr-[26px]">

                        <img
                          className="w-[60px] h-[60px] relative object-cover z-[3]"

                          loading="lazy"
                          alt=""
                          src="/oip-1-1@2x.png"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">

                        <img
                          className="w-[50px] h-[50px] relative object-cover z-[3]"

                          loading="lazy"
                          alt=""
                          src="/r-2@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[189.5px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                      <div className="flex-1 flex flex-row items-start justify-between gap-5 mq450:flex-wrap mq450:justify-center">

                        <img
                          className="h-20 w-20 relative object-cover z-[3]"

                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                        <div className="h-[70px] w-[50.5px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">

                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[3]"

                            loading="lazy"
                            alt=""
                            src="/image-2@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[280px] right-[15px] w-[628px] h-[200px] text-2xl text-silver">
                      <div className="absolute top-[0px] right-[18px] rounded-xl bg-white border-silver border-[1px] border-solid box-border w-[628px] h-[250px] z-[3]" />
                      <div className="absolute top-[40px] right-[185px] z-[4] mq450:text-base">

                        <p className="m-0">
                          <u>输入微信群/小红书群....的对话看看？下拉复制的内容就行。</u>
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">例如：</p>
                        <p className="m-0">姚祺 👾:</p>
                        <p className="m-0">周末也可以来线下一起玩</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">XX:</p>
                        <p className="m-0">感觉小赞助有望哈哈</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">&nbsp;</p>
                      </div>
                </div>
                
                <div className="absolute top-[50px] right-[32px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="rounded-xl bg-white border-silver border-[1px] border-solid box-border flex flex-row items-start justify-start pt-7 px-[38px] pb-[21px] max-w-full z-[3]">
                    <div className="h-[83px] w-[456px] relative rounded-xl bg-white border-silver border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="relative z-[4] mq450:text-xl">

                      <u>你或者运营者在社交媒体上的名字</u>
                    </div>
                  </div>
                  <div className="w-[628px] rounded-xl bg-white border-silver border-[1px] border-solid box-border flex flex-row items-start justify-start py-6 pl-9 pr-[26px] min-h-[10px] max-w-full z-[3]">
                    <div className="h-[60px] w-[456px] relative rounded-xl bg-white border-silver border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="h-[80px] relative inline-block z-[4] mq450:text-xl">

                      <p className="m-0"><u>你是怎么用群聊赚钱的</u></p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">例如：</p>
                      <p className="m-0">我提供99块钱的群聊管理SaaS软件</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[550px] right-[30px] w-[150px] rounded-8xs bg-black flex flex-row items-start justify-end py-7 px-[25px] box-border z-[3] text-xl text-white">
                  <div className="h-20 w-[150px] relative rounded-8xs bg-black hidden" />
                  <div className="relative inline-block min-w-[80px] z-[4] mq450:text-base">

                    来试试？
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
