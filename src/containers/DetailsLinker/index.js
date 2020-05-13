import { connect } from 'react-redux';
import { getTrailer, getSimilar } from '../../state/details/service';
import { resetTrailerId } from '../../state/details/actions';
import DetailsScreen from '../../components/shared/Details';

DetailsScreen.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  const index = navigation.getParam('index');
  return [{ id: `image-${item.id}-${index}`, animation: 'fade' }];
};

const mapStateToProps = state => ({
  trailerId: state.details.trailerId,
  isLoadingTrailerId: state.details.isLoadingTrailerId,
  similarList: state.details.similar.list,
  isLoadingSimilar: state.details.similar.isLoadingSimilar
})

const mapDispatchToProps = {
  getTrailer,
  getSimilar,
  resetTrailerId
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen)