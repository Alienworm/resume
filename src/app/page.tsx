"use client";

import React from 'react';
import BasicInfo from "@/app/components/basic-info";
import InfoCard from "@/app/components/info-card";


export default function Home() {

  return (
    <div className='min-h-screen w-1/2 bg-background pb-8'>
      <BasicInfo></BasicInfo>
      <InfoCard
        header={
          <div>
            <div className="flex items-center space-x-2">
              <i className="fa-duotone fa-school text-xl text-primary w-6 text-center"></i>
              <span className="text-text text-md font-bold tracking-wide">教育经历</span>
            </div>
          </div>
        }
        body={
          <div className="flex f`lex-col">
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>本科阶段</span><span>厦门理工学院</span><span>软件工程</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>2017.09 ~ 2021.06</span>
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-sm text-primary font-bold">主修课程：</span>
                  <span className="tracking-wide text-sm">C语言程序设计、网页设计、数据结构与算法、计算机网络、面对对象编程、软件测试技术、数据库原理与应用、Web编程、大数据编程与应用、机器学习；</span>
                </div>
                <div>
                  <span className="text-sm text-primary font-bold">荣誉奖项：</span>
                  <span className="tracking-wide text-sm">厦门理工学院2021届优秀毕业生、二等奖学金、三等奖学金。</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>研究生阶段</span><span>华南农业大学</span><span>计算机技术</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>2022.09 ~ 至今</span>
              </div>
              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-sm text-primary font-bold">主修课程：</span>
                  <span className="tracking-wide text-sm">人工智能、组合数学、算法设计与分析、深度学习、自然语言处理；</span>
                </div>
                <div>
                  <span className="text-sm text-primary font-bold">荣誉奖项：</span>
                  <span className="tracking-wide text-sm">一等奖学金、三等奖学金。</span>
                </div>
              </div>
            </div>
          </div>
        }
      >
      </InfoCard>
      <InfoCard
        header={
          <div>
            <div className="flex items-center space-x-2">
              <i className="fa-duotone fa-tools text-xl text-primary w-6 text-center"></i>
              <span className="text-text text-md font-bold tracking-wide">技能证书</span>
            </div>
          </div>
        }
        body={
          <div className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <div>
                <span className="text-sm text-primary font-bold">技能：</span>
                <span className="tracking-wide text-sm">Vue\React\Flutter\微信小程序前端开发、Flask\Spring Boot后端开发、Docker项目部署维护、大语言模型微调、图像识别模型训练以及量化、Word\PPT\Excel等办公软件使用、Adobe XD原型设计；</span>
              </div>
              <div>
                <span className="text-sm text-primary font-bold">证书：</span>
                <span className="tracking-wide text-sm">英语4级（431分）、英语6级（468分）。</span>
              </div>
            </div>
          </div>
        }
      >
      </InfoCard>
      <InfoCard
        header={
          <div>
            <div className="flex items-center space-x-2">
              <i className="fa-duotone fa-diagram-project text-xl text-primary w-6 text-center"></i>
              <span className="text-text text-md font-bold tracking-wide">项目经历</span>
            </div>
          </div>
        }
        body={
          <div className="flex flex-col">
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>基于知识图谱的医疗问答机器人</span><span>课程设计</span><span>独立开发</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>本科阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：医疗数据爬取、数据清洗、医疗知识图谱构建、自然语言处理、前后端开发。</span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>电影推荐系统</span><span>课程设计</span><span>团队开发，负责前后端开发</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>本科阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：数据库构建、前后端开发。Web端基于Vue框架进行搭建、移动端基于Flutter框架进行搭建、后端利用Flask进行快速构建。</span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>基于知识图谱的医保基金欺诈检测系统</span><span>毕业设计</span><span>独立开发</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>本科阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：数据收集、数据清洗、欺诈检测算法设计与实现、前后端开发等。Web端基于Vue框架进行搭建，后端采用Spring Boot框架进行开发。利用Neo4j构建知识图谱数据库，在此基础上利用社区发现等算法来实现欺诈检测功能。<br></br><span className="text-primary">演示链接：https://www.bilibili.com/video/BV15i4y1y7Ss/</span></span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>基于YOLOv5的代驾司机打卡系统</span><span>实际项目</span><span>独立开发</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>研究生阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：代驾司机打卡图片采集、数据标注、模型训练以及量化加速，微信小程序开放以及后端开发。用于减轻代驾平台客服审核工作，代驾师傅上线前利用小程序进行打卡，模型会检测师傅是否穿戴头盔、反光服、手套以及座椅垫。<br></br><span className="text-primary">演示链接：微信小程序搜索“司机打卡”</span></span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>基于大语言模型的代驾客服系统</span><span>实际项目</span><span>独立开发</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>研究生阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：大语言模型微调、基于Wechaty的微信群聊客服开发。用于减轻代驾平台客服工作、及时在微信群聊里回复客户信息、识别客户下单请求并帮助客户进行快速下单。</span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>毛鸡销售区域布局规划项目</span><span>实际项目</span><span>团队开发，负责规划算法设计与实现</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>研究生阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：数据清洗、数据分析、规划算法设计与实现、项目部署与维护，前后端开发。用于对各个区域的毛鸡销售量进行规划。规划算法基于数学求解器CPLEX、CVX包进行开发，包括目标函数设计、约束设计等。采用Docker进行项目的部署。</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-text text-md font-bold tracking-wide mb-2">
                <div className="space-x-8"><span>毛鸡销售辅助定价项目</span><span>实际项目</span><span>团队开发，负责数据处理以及算法工程化</span></div>
                <span className="flex items-center"><i className="fa-duotone fa-calendar-days text-xl text-primary text-center mr-2"></i>研究生阶段</span>
              </div>
              <div>
                <span className="tracking-wide text-sm">主要工作包括：数据清洗、数据分析、定价算法工程化、项目部署与维护。用于辅助各个地区毛鸡定价人员每天的毛鸡定价工作。采用Docker进行项目的部署。</span>
              </div>
            </div>
          </div>
        }
      >
      </InfoCard>
      <InfoCard
        header={
          <div>
            <div className="flex items-center space-x-2">
              <i className="fa-duotone fa-trophy-star text-xl text-primary w-6 text-center"></i>
              <span className="text-text text-md font-bold tracking-wide">获奖经历</span>
            </div>
          </div>
        }
        body={
          <div className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-primary font-bold">个人奖项：</span>
                <span className="tracking-wide text-sm">2018年03月：第二届“强网杯”全国网络安全挑战赛线上赛优秀奖；</span>
                <span className="tracking-wide text-sm">2018年04月：蓝桥杯C/C++程序设计大学 B 组三等奖；</span>
                <span className="tracking-wide text-sm">2019年11月：2019年全国大学生软件测试大赛福建赛区移动应用测试、开发者测试赛一等奖；</span>
                <span className="tracking-wide text-sm">2019年12月：2019年全国大学生软件测试大赛总决赛移动应用测试全国三等奖、开发者测试全国二等奖；</span>
                <span className="tracking-wide text-sm">2020年11月：2020年全国大学生软件测试大赛福建赛区移动应用测试个人赛一等奖。</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-primary font-bold">集体奖项：</span>
                <span className="tracking-wide text-sm">2018年07月：2018年第十一届全国大学生信息安全竞赛创新能力实践赛，全国三等奖；</span>
                <span className="tracking-wide text-sm">2018年09月：“网鼎杯”优秀奖；</span>
                <span className="tracking-wide text-sm">2018年12月：第四届“福建省高校网络空间安全大赛”优秀奖；</span>
                <span className="tracking-wide text-sm">2019年05月：第十届福建省大学生程序设计竞赛铜奖；</span>
                <span className="tracking-wide text-sm">2019年06月：2019年第十二届全国大学生信息安全竞赛创新能力实践赛，赛区二等奖；</span>
                <span className="tracking-wide text-sm">2019年09月：福建省2019年国家网络安全宣传周网络空间安全知识和安全技能竞赛（高校组“黑盾杯”赛项），一等奖；</span>
              </div>
            </div>
          </div>
        }
      >
      </InfoCard>
    </div>
  )
}
