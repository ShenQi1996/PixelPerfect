class User < ApplicationRecord 
    attr_reader :password

    validates :username, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token


    has_many :pictures,
        foreign_key: :ownerId,
        class_name: :Picture

    has_many :likes,
        foreign_key: :userId,
        class_name: :Like

    has_many :comments,
        foreign_key: :userId,
        class_name: :Comment


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
      end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
