class Comment < ApplicationRecord
    validates :userId, :pictureId, presence: true
    validates :comment, presence: true
    validates :username, presence: true
    # validates :check_comment_length
    belongs_to :user,
        foreign_key: :userId,
        class_name: :User

    belongs_to :picture,
        foreign_key: :pictureId,
        class_name: :Picture

    # def check_comment_length
    #     unless self.comment.length >= 2
    #         errors[:comment] << "Comment is too short, must be longer than two or more characters"
    #     end
    # end
end