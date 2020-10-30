export default function membersCards(){
    return {

        setCloneCardAttributes: function({ imageField, nameField, usernameField }, data){
        
            imageField.src = data.foto;
            nameField.innerText = data.nome;
            usernameField.innerText = data.user;
        },
        
        mapCloneGuestCard: function(fragment){
            const guestCard = fragment.children[0].children[0];
            const guestImage = guestCard.children[0];
            const guestName = guestCard.children[1].children[0];
            const guestUsername = guestCard.children[1].children[1];
        
            return {
                "imageField": guestImage,
                "nameField": guestName,
                "usernameField": guestUsername
            }
        },
        
        mapCloneMemberCard: function(fragment){
            const memberCard = fragment.children[0]
            const memberImage = memberCard.children[0];
            const memberName = memberCard.children[1].children[0];
            const memberUsername = memberCard.children[1].children[1];
        
            return {
                "imageField": memberImage,
                "nameField": memberName,
                "usernameField": memberUsername
            }
        }
    }
}