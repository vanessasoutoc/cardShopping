import { Button, Card, Icon, Layout, Modal, Text } from "@ui-kitten/components";
import { Product } from "../../pages/products/products";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { addItemToCardLocal } from "../../services/localstorage.service";
import { formatDecimal } from "../../services/util.service";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  layout: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    margin: 2,
  },
});

const ProductDetail = ({
  product,
  open,
  sendVisibleToParent,
}: {
  product: Product;
  open: boolean;
  sendVisibleToParent: any;
}): React.ReactElement => {
  const [quantity, setQuantity] = useState<number>(1);

  const addCart = () => {
    sendVisibleToParent(false);
    const item = { ...product, quantity };
    addItemToCardLocal(item)
  };

  return (
    <>
      {product && (
        <Modal visible={open} style={{ width: "100%" }}>
          <Layout style={styles.container}>
            <Card disabled={true} style={{ padding: 0, width: "100%" }}>
              <header
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  onPress={() => sendVisibleToParent(false)}
                  appearance="ghost"
                  accessoryLeft={<Icon style={{ width: 20 }} name="close" />}
                ></Button>
              </header>
              <br />
              <Text>{product.name}</Text>
              <Text>{formatDecimal(product.unit_price)}</Text>
              <Layout style={styles.layout}>
                <Layout>
                  <label>Quant.</label>
                  <input
                    type="number"
                    defaultValue={1}
                    onChange={(event) =>
                      setQuantity(Number(event?.target?.value))
                    }
                    min={0}
                  />
                </Layout>
                <Layout>
                  <label>Total</label>
                  <Text>{formatDecimal(product.unit_price * quantity)}</Text>
                </Layout>
                <Layout style={styles.layout}>
                  <Button
                    onPress={() => addCart()}
                    appearance="ghost"
                    status="danger"
                    accessoryRight={
                      <Icon
                        style={{ width: 30 }}
                        name="shopping-cart-outline"
                      />
                    }
                  ></Button>
                </Layout>
              </Layout>
            </Card>
          </Layout>
        </Modal>
      )}
    </>
  );
};

export default ProductDetail;
