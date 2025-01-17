import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { images } from '../../constants';
interface NftCollection {
  image?: any;
  Name?: string;
  id?: number;
}

interface initialStateProps {
  isBottomSheetOpen: boolean;
  renderCount: number;
  uploadImageModalOpen: boolean;
  uploadModalRenderCount: number;
  NftModalOpen: boolean;
  NFTRender: number;
  selectedCollectionModal: boolean;
  selectedRender: number;
  profilePics: {
    image: any;
    name: string;
    id: number;
  };
  listOfNftCollections: NftCollection[];
  superStarBottomSheet: boolean;
  verificationModal: boolean;
}
const initialState: initialStateProps = {
  isBottomSheetOpen: false,
  renderCount: 0,
  uploadImageModalOpen: false,
  uploadModalRenderCount: 0,
  NftModalOpen: false,
  NFTRender: 0,
  selectedCollectionModal: false,
  selectedRender: 0,
  profilePics: {
    image: undefined,
    name: '',
    id: 0,
  },
  listOfNftCollections: [
    {
      image: images.NftCollection1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 1,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 2,
    },
    {
      image: images.superStar2,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 3,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 4,
    },
    {
      image: images.superStar1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 5,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 6,
    },
    {
      image: images.NftCollection1,
      Name: 'Aptos Monkey lorem Ipsumdalr',
      id: 7,
    },
    {
      image: images.NftCollection2,
      Name: 'Aptomingos',
      id: 8,
    },
  ],
  superStarBottomSheet: false,
  verificationModal: false,
};

export const bottomSheetSlice = createSlice({
  name: 'BottomSheet',
  initialState,
  reducers: {
    updateBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.isBottomSheetOpen = action.payload;
    },
    updateRenderCount: (state, action: PayloadAction<number>) => {
      state.renderCount = action.payload;
    },
    updateUploadImageModalOpen: (state, action: PayloadAction<boolean>) => {
      state.uploadImageModalOpen = action.payload;
    },
    updateUploadModalRenderCount: (state, action: PayloadAction<number>) => {
      state.uploadModalRenderCount = action.payload;
    },
    updateNftOpen: (state, action: PayloadAction<boolean>) => {
      state.NftModalOpen = action.payload;
    },
    updateNftRender: (state, action: PayloadAction<number>) => {
      state.NFTRender = action.payload;
    },
    updateSelectedCollection: (state, action: PayloadAction<boolean>) => {
      state.selectedCollectionModal = action.payload;
    },
    updateSelectedRender: (state, action: PayloadAction<number>) => {
      state.selectedRender = action.payload;
    },
    updateProfilePics: (state, action: PayloadAction<any>) => {
      state.profilePics = action.payload;
    },
    updateSuperStarBottomSheet: (state, action: PayloadAction<boolean>) => {
      state.superStarBottomSheet = action.payload;
    },
    updateVerificationModal: (state, action: PayloadAction<boolean>) => {
      state.verificationModal = action.payload;
    },
    // updateNotFoundModal: (state, action: PayloadAction<boolean>) => {
    //   state.notFoundModal = action.payload;
    // },
  },
});
export const {
  updateBottomSheet,
  updateRenderCount,
  updateUploadImageModalOpen,
  updateUploadModalRenderCount,
  updateNftOpen,
  updateNftRender,
  updateSelectedCollection,
  updateSelectedRender,
  updateProfilePics,
  updateSuperStarBottomSheet,
  updateVerificationModal,
} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;
