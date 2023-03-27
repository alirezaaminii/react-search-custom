import Home from '@/pages-components/index'
import React from "react";
import {GetServerSideProps} from "next";

export type HomeProps = {
  cities: string[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async context => {
  const { name } = context.query;

  const res = await fetch(`http://localhost:3000/api/cities${name ? `?name=${name}` : ''}`);
  const cities = await res.json();

  return {
    props: {
      cities
    }
  };
};

export default Home
