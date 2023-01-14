import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#df240b"
      wrapperStyle={{
        justifyContent: 'center',
        marginTop: '10px',
        zIndex: '999',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#11e771"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};
