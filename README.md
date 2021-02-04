# README

## アプリケーション名
Food Management

## アプリケーション概要
このアプリケーションは家族を対象としており、特に料理をする者が献立を考えやすいよう意図されている。
ユーザー登録の際、名前やメールアドレス、パスワードの他に苦手やアレルギーのある料理・材料も登録することができる。自分のコミュニティーを作成することでコミュニティーメンバーの食べられないものを把握することができ、レシピ検索する際それらの食べ物を除いたレシピを表示することができる。

## 目指した課題解決
家族の献立を考える際に家族が食べられないものを覚えていないということが頻繁にある。また逆に、食べられないものを覚えておいてもらえないことで料理を楽しむことができないということもある。こうした問題を解決するためには好き嫌いやアレルギーを記録しておくアプリが必要であると考えた。

## 要件定義


## ER図
![DB](https://user-images.githubusercontent.com/75514851/106862048-edfbc980-6709-11eb-8708-d9dd14e9a67a.png)



- 機能としてはユーザー管理機能、投稿機能(videoとメッセージのいずれかのみ可能)、コミュニティー管理機能を実装した。

# テーブル設計

## users テーブル

| Column         | Type   | Options     |
| -------------- | ------ | ----------- |
| name           | string | null: false |
| email          | string | null: false |
| password       | string | null: false |
| unpalatability | text   | null: false |

### Association

- has_many :community_users
- has_many :communities, through: community_users
- has_many :videos

## communities テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association

- has_many :community_users
- has_many :users, through: community_users
- has_many :videos

## community_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| room   | references | null: false, foreign_key: true |

### Association

- belongs_to :community
- belongs_to :user

## videos テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| content | string     | null: false                    |
| user    | references | null: false, foreign_key: true |
| room    | references | null: false, foreign_key: true |

### Association

- belongs_to :community
- belongs_to :user