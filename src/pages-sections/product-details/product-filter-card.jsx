"use client";

import { Fragment, useState } from "react";
// MUI

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
// LOCAL CUSTOM COMPONENTS

import CheckboxLabel from "./checkbox-label";
// GLOBAL CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from "components/flex-box";
import { H5, H6, Paragraph, Span } from "components/Typography";
import AccordionHeader from "components/accordion/accordion-header";
// TYPE

import { Slider } from "@mui/material";
// FILTER OPTIONS

const categoryList = [
  {
    title: "Bath Preparations",
    subCategories: ["Bubble Bath", "Bath Capsules", "Others"],
  },
  {
    title: "Eye Makeup Preparations",
  },
  {
    title: "Fragrance",
  },
  {
    title: "Hair Preparations",
  },
];
const BRANDS = [
  {
    label: "Mac",
    value: "mac",
  },
  {
    label: "Karts",
    value: "karts",
  },
  {
    label: "Baals",
    value: "baals",
  },
  {
    label: "Bukks",
    value: "bukks",
  },
  {
    label: "Luasis",
    value: "luasis",
  },
];
const OTHERS = [
  {
    label: "On Sale",
    value: "sale",
  },
  {
    label: "In Stock",
    value: "stock",
  },
  {
    label: "Featured",
    value: "featured",
  },
];
const colorList = [
  "#1C1C1C",
  "#FF7A7A",
  "#FFC672",
  "#84FFB5",
  "#70F6FF",
  "#6B7AFF",
];
// ============================================================================

// ============================================================================
export default function ProductFilterCard({ filters, changeFilters }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleChangePrice = (values) => {
    changeFilters("price", values);
  };

  const handleChangeColor = (value) => {
    const values = filters?.color.includes(value)
      ? filters?.color.filter((item) => item !== value)
      : [...filters?.color, value];
    changeFilters("color", values);
  };

  const handleChangeBrand = (value) => {
    const values = filters?.brand.includes(value)
      ? filters?.brand.filter((item) => item !== value)
      : [...filters?.brand, value];
    changeFilters("brand", values);
  };

  const handleChangeSales = (value) => {
    const values = filters?.sales.includes(value)
      ? filters?.sales.filter((item) => item !== value)
      : [...filters?.sales, value];
    changeFilters("sales", values);
  };

  const handleChangeRating = (value) => {
    changeFilters("rating", value);
  };

  return (
    <div>
      {/* CATEGORY VARIANT FILTER */}
      <H6 mb={1.25}>Categories</H6>
      {categoryList.map((item) =>
        item.subCategories ? (
          <Fragment key={item.title}>
            <AccordionHeader
              open={collapsed}
              onClick={() => setCollapsed((state) => !state)}
              sx={{
                padding: ".5rem 0",
                cursor: "pointer",
                color: "grey.600",
              }}
            >
              <Span>{item.title}</Span>
            </AccordionHeader>

            <Collapse in={collapsed}>
              {item.subCategories.map((name) => (
                <Paragraph
                  pl="22px"
                  py={0.75}
                  key={name}
                  fontSize="14px"
                  color="grey.600"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {name}
                </Paragraph>
              ))}
            </Collapse>
          </Fragment>
        ) : (
          <Paragraph
            key={item.title}
            sx={{
              py: 0.75,
              fontSize: 14,
              cursor: "pointer",
              color: "grey.600",
            }}
          >
            {item.title}
          </Paragraph>
        )
      )}

      <Box component={Divider} my={3} />

      {/* PRICE VARIANT FILTER */}
      <H6 mb={2}>Price Range</H6>

      <Slider
        min={0}
        max={300}
        size="small"
        value={filters?.price}
        valueLabelDisplay="auto"
        valueLabelFormat={(v) => `$${v}`}
        onChange={(_, v) => handleChangePrice(v)}
      />
      <FlexBetween>
        <TextField
          fullWidth
          size="small"
          type="number"
          placeholder="0"
          value={filters?.price[0]}
          onChange={(e) =>
            handleChangePrice([+e.target.value, filters?.price[1]])
          }
        />

        <H5 color="grey.600" px={1}>
          -
        </H5>

        <TextField
          fullWidth
          size="small"
          type="number"
          placeholder="250"
          value={filters?.price[1]}
          onChange={(e) =>
            handleChangePrice([filters?.price[0], +e.target.value])
          }
        />
      </FlexBetween>

      <Box component={Divider} my={3} />

      {/* BRAND VARIANT FILTER */}
      <H6 mb={2}>Brands</H6>
      <FormGroup>
        {BRANDS.map(({ label, value }) => (
          <CheckboxLabel
            key={value}
            label={label}
            checked={filters?.brand.includes(value)}
            onChange={() => handleChangeBrand(value)}
          />
        ))}
      </FormGroup>

      <Box component={Divider} my={3} />

      {/* SALES OPTIONS */}
      <FormGroup>
        {OTHERS.map(({ label, value }) => (
          <CheckboxLabel
            key={value}
            label={label}
            checked={filters?.sales.includes(value)}
            onChange={() => handleChangeSales(value)}
          />
        ))}
      </FormGroup>

      <Box component={Divider} my={3} />

      {/* RATINGS FILTER */}
      <H6 mb={2}>Ratings</H6>
      <FormGroup>
        {[5, 4, 3, 2, 1].map((item) => (
          <CheckboxLabel
            key={item}
            checked={filters?.rating === item}
            onChange={() => handleChangeRating(item)}
            label={<Rating size="small" value={item} color="warn" readOnly />}
          />
        ))}
      </FormGroup>

      <Box component={Divider} my={3} />

      {/* COLORS VARIANT FILTER */}
      <H6 mb={2}>Colors</H6>
      <FlexBox mb={2} flexWrap="wrap" gap={1.5}>
        {colorList.map((item) => (
          <Box
            key={item}
            width={25}
            height={25}
            flexShrink={0}
            bgcolor={item}
            borderRadius="50%"
            onClick={() => handleChangeColor(item)}
            sx={{
              outlineOffset: 1,
              cursor: "pointer",
              outline: filters?.color.includes(item) ? 1 : 0,
              outlineColor: item,
            }}
          />
        ))}
      </FlexBox>
    </div>
  );
}
