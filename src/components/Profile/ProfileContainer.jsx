import React from 'react';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile_reducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter)(ProfileContainer);