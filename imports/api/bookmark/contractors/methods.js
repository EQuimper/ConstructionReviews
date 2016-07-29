import { Meteor } from 'meteor/meteor';
import { BookmarkContractors } from './contractors';

Meteor.methods({
  addContractorToBookmark(contractor) {
    const newContractorBookmarked = BookmarkContractors.insert({
      _id: contractor._id,
      name: contractor.name,
      description: contractor.description,
      city: contractor.city,
      province: contractor.province,
      slug: contractor.slug,
    });
    return newContractorBookmarked;
  },
});

Meteor.methods({
  removeContractorToBookmark(id) {
    BookmarkContractors.remove({
      _id: id,
    });
    return BookmarkContractors;
  },
});
