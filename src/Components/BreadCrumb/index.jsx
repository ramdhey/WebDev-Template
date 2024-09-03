import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const BreadCrumbs = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="/my-page">My Page</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export default BreadCrumbs;
