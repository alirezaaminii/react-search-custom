import Home from '@/pages-components/home'
import React from "react";
import {GetServerSideProps} from "next";
import {NetworkService} from "@/services/http";

export type HomeProps = {
  cities: string[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async context => {
  const { name } = context.query;

  const res = await NetworkService.request<null, null, string[]>({
    config: {
      method: 'GET',
      url: `http://localhost:3000/api/cities${name ? `?name=${name}` : ''}`,
    },
  });

  return {
    props: {
      cities: res.data
    }
  };
};

export default Home
