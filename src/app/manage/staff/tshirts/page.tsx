"use client";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon"
import { RenderCell } from "@/components/table/render-cell"
import { Button, Chip, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea, useDisclosure } from "@nextui-org/react"
import React, { useEffect, useState } from 'react'
import { faEdit, faRemove, faEye, faTShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "@/components/icons/searchicon";
import { fetchPagedShirts, fetchShirts } from "@/app/service/shirt_service";
import SaveButton from "./SaveButton";

const ShirtsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [viewDetail, setViewDetail] = useState(false);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [pagedResult, setpagedResult] = useState<PagedResult<PagedShirt>>();

  const [createImageSrc, setCreateImageSrc] = useState("https://nextui-docs-v2.vercel.app/images/album-cover.png");
  const handleCreateImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Use a type assertion to tell TypeScript that reader.result will be a string
        setCreateImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setCreateImageSrc("https://nextui-docs-v2.vercel.app/images/album-cover.png"); // Reset to default or placeholder if not an image
    }
  };

  const shirts = [
    {
      id: 1,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "sp23",
      quantity: 23,
      version: "newest",
      player: "Ronaldo",
      status: "status",
    },
    {
      id: 2,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "sp23",
      quantity: 23,
      version: "newest",
      player: "Ronaldo",
      status: "status",
    },
    {
      id: 3,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "sp23",
      quantity: 23,
      version: "newest",
      player: "Ronaldo",
      status: "status",
    },
    {
      id: 4,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "sp23",
      quantity: 23,
      version: "newest",
      player: "Ronaldo",
      status: "status",
    },
    {
      id: 5,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "sp23",
      quantity: 23,
      version: "newest",
      player: "Ronaldo",
      status: "status",
    },
    {
      id: 6,
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      description: "sp23",
      quantity: 23,
      version: "newest",
      player: "Ronaldo",
      status: "status",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchShirts(page, 4, keyword).then(data => {
        setpagedResult(data);
      });
    }, 400);

    return () => {
      clearTimeout(timer);
    }
  }, [page, keyword]);

  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/manage/staff/tshirt"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <FontAwesomeIcon
            icon={faTShirt}
            className="text-white-500"
          />
          <span>Áo đấu</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Danh sách</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Tất cả áo đấu</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Nhập tên áo đấu..."
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <div>
            <Button onClick={() => setIsOpen(true)} color='primary'>Thêm áo đấu</Button>

            <Modal isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
                setIsEdit(false);
              }} placement='top-center' size="4xl">
              <ModalContent>
                {(onClose) => (
                  <form id="create_shirt_form">
                    <ModalHeader className='flex flex-col gap-1'>
                      {isEdit ? "Sửa áo đấu" : "Thêm áo đấu"}
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex flex-row">
                        <div className="w-2/5">
                          <Image
                            isBlurred
                            width={240}
                            src={createImageSrc}
                            alt="..."
                            className="m-5"

                          />
                          <Input
                            onChange={handleCreateImageChange}
                            type="file"
                            name="Images"
                            accept="image/*"
                          />
                        </div>
                        <div className="w-3/5">
                          <Input label='Mã áo' name="Code" variant='bordered' className="w-full p-2" />
                          <Input label='Tên áo' name="Name" variant='bordered' className="w-full p-2" />
                          <Textarea
                            label="Mô tả áo"
                            placeholder="Nhập mô tả"
                            className="w-full p-2"
                            name="Description"
                          />
                          <Input
                            label="Số lượng"
                            name="Quantity"
                            variant="bordered"
                            className="w-full p-2"
                          />
                          <Input label='Mã phiên bản' type="number" name="ShirtEditionId" variant='bordered' className="w-full p-2" />
                          <Input label='Mã bộ mùa giải và cầu thủ' type="number" name="SeasonPlayerId" variant='bordered' className="w-full p-2" />
                          {/* <Input label='Trạng thái' variant='bordered' className="w-full p-2" /> */}
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onClick={onClose}>
                        Đóng
                      </Button>
                      <SaveButton isEdit={isEdit} onClose={onClose} />
                      {/* <Button color="primary" onPress={onClose}>
                        {isEdit ? "Lưu" : "Thêm"}
                      </Button> */}
                    </ModalFooter>
                  </form>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        {/* <TableWrapper /> */}
        <div className=" w-full flex flex-col gap-4">
          <Table aria-label="Users Table">
            <TableHeader>
              <TableColumn className="text-2xl">Mã</TableColumn>
              <TableColumn className="text-2xl">Tên áo</TableColumn>
              <TableColumn className="text-2xl">Mô tả</TableColumn>
              <TableColumn className="text-2xl">Số lượng</TableColumn>
              <TableColumn className="text-2xl">Trạng thái</TableColumn>
              <TableColumn className="text-2xl">...</TableColumn>
            </TableHeader>
            {!pagedResult || pagedResult?.items.length == 0 ? (
              <TableBody emptyContent={"Không có áo nào."}>
                {[]}
              </TableBody>
            ) : (
              <TableBody>
                {pagedResult.items.map((shirt, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xl">
                      {shirt.code}
                    </TableCell>
                    <TableCell className="text-xl">
                      {shirt.name}
                    </TableCell>
                    <TableCell className="text-xl">
                      {shirt.description}
                    </TableCell>
                    <TableCell className="text-xl">
                      {shirt.quantity}
                    </TableCell>
                    <TableCell className="text-xl">
                      <Chip
                        size="md"
                        variant="flat"
                        color={
                          shirt.status === "active"
                            ? "success"
                            : shirt.status === "paused"
                              ? "danger"
                              : "warning"
                        }
                      >
                        {shirt.status}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <Button
                        className="w-1/6 text-black"
                        aria-label="detail"
                        onClick={() => setViewDetail(true)}
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-white-500"
                        />
                      </Button>
                      <Button
                        className="w-1/6 bg-yellow-500 text-white"
                        aria-label="edit"
                        onClick={() => {
                          setIsEdit(true);
                          setIsOpen(true);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-white-500"
                        />
                      </Button>
                      <Button
                        className="w-1/6 bg-red-500 text-white"
                        aria-label="remove"
                        onClick={() => setIsConfirm(true)}
                      >
                        <FontAwesomeIcon
                          icon={faRemove}
                          className="text-white-500"
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
          <Pagination onChange={(newPage) => setPage(newPage)} showControls total={pagedResult?.["total-pages"] ?? 1} initialPage={page} />

          <Modal size="2xl" isOpen={isConfirm} onClose={() => setIsConfirm(false)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Xác nhận
                  </ModalHeader>
                  <ModalBody>
                    <div className="w-full flex items-center justify-center">
                      <p className="text-4xl">
                        Xóa mẫu áo đấu này ?
                      </p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Không
                    </Button>
                    <Button color="success" onPress={onClose}>
                      Có
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          <Modal size="4xl" isOpen={viewDetail} onClose={() => setViewDetail(false)}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Chi tiết
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-row">
                      <div className="w-2/5 flex justify-center items-start">
                        <Image
                          isBlurred
                          width={240}
                          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                          alt="NextUI Album Cover"
                          className="m-5"
                        />
                      </div>
                      <div className="w-3/5">
                        <p className="w-full p-2">Mã sản phẩm</p>
                        <p className="w-full p-2">Mô tả</p>
                        <p className="w-full p-2">Số lượng</p>
                        <p className="w-full p-2">Phiên bản</p>
                        <p className="w-full p-2">Cầu thủ</p>
                        <p className="w-full p-2">Trạng thái</p>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onPress={onClose}>
                      Đóng
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ShirtsSection;