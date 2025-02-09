import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/common/components/ui/pagination"
import { Button } from "./ui/button";


export default function pagination({ totalPages }: { totalPages: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get("page")) || 1;
  if (isNaN(page) || page < 1 || page > totalPages) {
    setSearchParams({ page: "1" });
  }  

  const onClick = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams, {
      preventScrollReset: true
    });
  }
  return (
    <Pagination>
      <PaginationContent>
        {page > 1 &&
          <>
        <PaginationItem>
            <PaginationPrevious to={`?page=${page - 1}`} onClick={(event) => {
              event.preventDefault();
              onClick(page - 1)
            }} />
        </PaginationItem>
         <PaginationItem>
            <PaginationLink to={`?page=${page - 1}`} onClick={(event) => {
              event.preventDefault();
              onClick(page - 1)
            }}>{page - 1}</PaginationLink>
        </PaginationItem>
          </>
        }
        <PaginationItem>
            <PaginationLink to={`?page=${page}`} onClick={(event) => {
              event.preventDefault();
              onClick(page)
            }} isActive>{page}</PaginationLink>
        </PaginationItem>
        {page < totalPages &&
        <PaginationItem>
            <PaginationLink to={`?page=${page+1}`} onClick={(event) => {
              event.preventDefault();
              onClick(page + 1)
            }}>{page+1}</PaginationLink>
          </PaginationItem>
        }
        {page + 1 < totalPages &&
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }
        {page + 1 <= totalPages &&
        <PaginationItem>
          <PaginationNext to={`?page=${page + 1}`} onClick={(event) => {
            event.preventDefault();
            onClick(page + 1)
          }} />
        </PaginationItem>
        }
    </PaginationContent>
  </Pagination>
  );
}

