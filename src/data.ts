export interface MDialogueCommon {
    avatar?: string;
    isSelf?: boolean;
    nickName?: string;
    subType?: string;
}
export interface MTextBody  extends MDialogueCommon {
    content: string;
}
export interface MPicutreBody extends MDialogueCommon {
    picUrl: string;
}
export interface MCardBody extends  MDialogueCommon{
    coverUrl: string;
    title: string;
    desc: string;
    accessLink: string;
}
export interface MSystemBody  extends MDialogueCommon{
    content?: string;
    performer?: string;
}
export type MSomeBodyType = MTextBody | MPicutreBody | MSystemBody |MCardBody
export type MAllBodyType = MTextBody & MPicutreBody & MSystemBody &MCardBody
export interface Message<BodyType> {
    Mid: string;
    MtimeStamp: number;
    MType: string;
    MBody: BodyType
}
export const messageList: Message<MSomeBodyType>[] = [{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'system',
    MBody: {
        subType: 'time',
        content: '231312312313',
    }
}, {
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'text',
    MBody: {
        isSelf: false,
        content: '丽丽,周末有没有什么安排呢',
        avatar: 'https://pic1.zhimg.com/v2-bde57fab9bd630124499f584d00c6cd8_b.jpg',
        nickName: '鱼儿'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'text',
    MBody: {
        isSelf: true,
        content: '我准备去看开心麻花的话剧,你想一起么',
        avatar: 'http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg',
        nickName: '丽丽'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'system',
    MBody: {
        isSelf: true,
        subType: 'withdraw',
        performer: '丽丽'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'picture',
    MBody: {
        isSelf: true,
        picUrl: 'https://pic3.zhimg.com/v2-363f7bc6155690ab794975215b55463a_r.jpg',
        avatar: 'http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg',
        nickName: '丽丽'
    }
}, {
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'text',
    MBody: {
        isSelf: false,
        content: '有没有具体的链接呢, 我想看看话剧详情',
        avatar: 'https://pic1.zhimg.com/v2-bde57fab9bd630124499f584d00c6cd8_b.jpg',
        nickName: '鱼儿'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'text',
    MBody: {
        isSelf: true,
        content: '好,我马上发你',
        avatar: 'http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg',
        nickName: '丽丽'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'card',
    MBody: {
        isSelf: true,
            avatar: 'http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg',
            subType: 'webLink',
            coverUrl: 'https://img9.doubanio.com/pview/drama_subject_poster/median/public/723b5363ef2d444.jpg',
            title: '贼想得到你',
            desc: '一颗价值连城的钻石，一个人心不古的小镇，错位和谎言拼贴出一段令人捧腹的抢劫轶事。',
            accessLink: 'https://www.douban.com/location/drama/34868527/',
            nickName: '丽丽'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'text',
    MBody: {
        isSelf: false,
        avatar: 'https://pic1.zhimg.com/v2-bde57fab9bd630124499f584d00c6cd8_b.jpg',
        content: '那我看看哈',
        nickName: '鱼儿'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'system',
    MBody: {
        isSelf: true,
        subType: 'joinGroup',
        performer: '阿杰'
    }
},
{
    Mid: Math.random().toString(),
    MtimeStamp: 1647084102166,
    MType: 'text',
    MBody: {
        content: '周末加我一个',
        avatar: 'https://img.syt5.com/2020/0828/20200828101353493.jpg.420.420.jpg',
        isSelf: false,
        nickName: '阿杰'
    }
}]