// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCookies } from '@repo-hubs/smart-tasks-ui';
// import {
//   addBToken,
//   addCrntBusiness,
// } from '../features/business/businessAuthSlicer';
// import { getBusinessById } from '@repo-hubs/smart-tasks-lib';

// const Mounts = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const businessId = getCookies('BTIP');
//     const fetchBusiness = async () => {
//       if (businessId) {
//         const res = await getBusinessById(businessId);
//         dispatch(addCrntBusiness(res));
//       }
//     };

//     fetchBusiness();
//   }, [dispatch]);

//   return(
//     <div></div>
//   )
// };

// export default Mounts;
