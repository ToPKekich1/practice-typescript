//enum - вспомогательная сущность которая позволяет лучше структурировать код если присутствуют однотипные элементы

enum MemberShip {
    Simple, //0
    Standart, //1
    Premium //2
}

const membership = MemberShip.Standart; // 1
const membershipReverse = MemberShip[2]; // 'Premium'

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM; //'INSTAGRAM'
