export interface PrefectureData {
  id: number;
  prefecture: string;
  capital: string;
  attractions: [string, string];
}

export const geographyData: PrefectureData[] = [
  {
    id: 1,
    prefecture: "北海道",
    capital: "札幌市",
    attractions: ["夕張メロン", "ラベンダー"],
  },
  {
    id: 2,
    prefecture: "青森県",
    capital: "青森市",
    attractions: ["青函トンネル", "白神山地"],
  },
  {
    id: 3,
    prefecture: "岩手県",
    capital: "盛岡市",
    attractions: ["わんこそば", "中尊寺金色堂"],
  },
  {
    id: 4,
    prefecture: "宮城県",
    capital: "仙台市",
    attractions: ["牛タン", "伊達政宗"],
  },
  {
    id: 5,
    prefecture: "秋田県",
    capital: "秋田市",
    attractions: ["きりたんぽ", "なまはげ"],
  },
  {
    id: 6,
    prefecture: "山形県",
    capital: "山形市",
    attractions: ["花笠おどり", "さくらんぼ"],
  },
  {
    id: 7,
    prefecture: "福島県",
    capital: "福島市",
    attractions: ["喜多方ラーメン", "ハワイアンズ"],
  },
  {
    id: 8,
    prefecture: "茨城県",
    capital: "水戸市",
    attractions: ["偕楽園", "国営ひたち海浜公園"],
  },
  {
    id: 9,
    prefecture: "栃木県",
    capital: "宇都宮市",
    attractions: ["日光東照宮", "餃子"],
  },
  {
    id: 10,
    prefecture: "群馬県",
    capital: "前橋市",
    attractions: ["草津温泉", "伊香保温泉"],
  },
  {
    id: 11,
    prefecture: "埼玉県",
    capital: "さいたま市",
    attractions: ["さいたまスーパーアリーナ", "鉄道博物館"],
  },
  {
    id: 12,
    prefecture: "千葉県",
    capital: "千葉市",
    attractions: ["ディズニーランド", "アクアライン"],
  },
  {
    id: 13,
    prefecture: "東京都",
    capital: "新宿区",
    attractions: ["東京タワー", "東京スカイツリー"],
  },
  {
    id: 14,
    prefecture: "神奈川県",
    capital: "横浜市",
    attractions: ["箱根", "鎌倉の大仏"],
  },
  {
    id: 15,
    prefecture: "新潟県",
    capital: "新潟市",
    attractions: ["信濃川", "越後湯沢"],
  },
  {
    id: 16,
    prefecture: "富山県",
    capital: "富山市",
    attractions: ["黒部ダム", "ホタルイカ"],
  },
  {
    id: 17,
    prefecture: "石川県",
    capital: "金沢市",
    attractions: ["金沢駅", "雪だるまウィーク"],
  },
  {
    id: 18,
    prefecture: "福井県",
    capital: "福井市",
    attractions: ["東尋坊", "恐竜博物館"],
  },
  {
    id: 19,
    prefecture: "山梨県",
    capital: "甲府市",
    attractions: ["ほうとう", "信玄餅"],
  },
  {
    id: 20,
    prefecture: "長野県",
    capital: "長野市",
    attractions: ["松本城", "白糸の滝"],
  },
  {
    id: 21,
    prefecture: "岐阜県",
    capital: "岐阜市",
    attractions: ["岐阜城", "下呂温泉"],
  },
  {
    id: 22,
    prefecture: "静岡県",
    capital: "静岡市",
    attractions: ["熱海温泉", "伊豆高原"],
  },
  {
    id: 23,
    prefecture: "愛知県",
    capital: "名古屋市",
    attractions: ["名古屋城", "犬山城"],
  },
];
