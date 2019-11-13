import React from 'react';
import Profile from './Profile';
import About from './About';

var profData = {
  bgImage: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/06/make_impossible_possible_adobe_stock_final_lead_0.jpg',
  name: 'Georgina Marveloso',
  profImage: 'https://s.blogcdn.com/slideshows/images/slides/357/674/1/S3576741/slug/l/katehudson-2.jpg',
  about: 'The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; male lions have a prominent mane, which is the most recognisable feature of the species. With a typical head-to-body length of 184–208 cm (72–82 in) they are larger than females at 160–184 cm (63–72 in). It is a social species, forming groups called prides. A lion pride consists of a few adult males, related females and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator, although some lions scavenge when opportunities occur, and have been known to hunt humans, although the species typically does not.'

};

function ProfileWrap(){
  var borderStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'grey',
    padding: '5px',
    margin: '5px'
  };

  return (
    <div>
      <div style={borderStyle}>
        <Profile bgImg={profData.bgImage} name={profData.name} profImage={profData.profImage} />
      </div>
      <div style={borderStyle}>
        <About content={profData.about} />
      </div>
    </div>
  );
}

export default ProfileWrap;