import axios, { AxiosPromise, AxiosResponse } from 'axios';
import React, { Component, ComponentType } from 'react';
import { Redirect } from 'react-router-dom';

interface IState {
  loading: boolean;
  redirect: boolean;
}

interface CheckTokenResponse {
  error?: any;
  status: number;
}

const withAuth = (ComponentToProtect: ComponentType) => {
  return class extends Component <any, IState> {
    constructor(props: any) {
      super(props);
      
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      this.checkToken();
    }

    checkToken = async () => {
      try {
        const res: CheckTokenResponse = await axios('/check-token');

        if (res.status === 200) {
          this.setState({ loading: false });
        } else {
          const error = new Error(res.error);
          throw error;
        }        
      } catch (err) {
        console.error(err);
        this.setState({ loading: false, redirect: true });
      }
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/admin" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}

export default withAuth;