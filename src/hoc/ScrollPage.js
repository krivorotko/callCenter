/**
 * Page screen wrapper with padding
 */

import React, { forwardRef } from "react";
import { StyleSheet, ScrollView } from "react-native";
import styleConstants from "../styles/styleConstants";
import Palette from "../styles/palette";

export default forwardRef(({ style, children, noPadding, ...props }, ref) => (
  <ScrollView
    style={[styles.page, !noPadding && styles.padding, style]}
    contentContainerStyle={styles.container}
    {...props}
    ref={ref}
  >
    {children}
  </ScrollView>
));

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Palette.white,
  },
  padding: {
    paddingHorizontal: styleConstants.PAGE_HORIZONTAL_PADDING,
  },
  container: {
    flexGrow: 1,
  },
});
