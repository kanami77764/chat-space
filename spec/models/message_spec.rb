require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
context 'messageを保存できる場合' do
      it 'contentがあれば保存できること' do
        expect(build(:message, image: nil)).to be_valid
      end

      it '画像があれば保存できること' do
        expect(build(:message, body: nil)).to be_valid
      end

      it "メッセージと画像があれば保存できること" do
        expect(build(:message)).to be_valid
      end
    end
    
    context 'messageを保存できない場合'do
      it "メッセージも画像もないと保存できないこと" do
        message = build(:message, body: nil, image: nil)
        message.valid?
        expect(message.errors[:body]).to include("を入力してください")
      end
      
      it "grouo_idがないと保存できないこと"do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it "user_idがないと保存できないこと"do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end