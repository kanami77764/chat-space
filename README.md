# Chat-space DB設計


## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, add_index  unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups_users
- has_many  :groups,  through:  :groups_users


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Associateion
- belongs_to :user
- belongs_to :group


## groupsテーブル
|column|Type|Options|
|------|----|------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :messages
- has_many :users,  through:  groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|string|null: false, foreign-key: true|
|group_id|string|null: false, foreign-key: true|

### Association
- belongs_to :user
- belongs_to :group